import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LineChartDataNgxCharts } from 'src/app/core/models/LineChartDataNgxCharts.model';
import { Olympic } from 'src/app/core/models/Olympic.model';
import { OlympicService } from 'src/app/core/services/olympic.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public olympic$: Observable<Olympic | undefined> = of(undefined);

  public nameOfCountry: string = '';  // Correct typo here as well for consistency
  public numberOfEntries: number = 0;
  public numberOfMedals: number = 0;
  public numberOfAthletes: number = 0;
  public lineChartData: LineChartDataNgxCharts[] | null = null;  // Use camelCase for variable name

  constructor(
    private olympicService: OlympicService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.olympicService.loadInitialData().subscribe(() => {
      this.olympic$ = this.olympicService.getOlympicById(+this.route.snapshot.params['idOlympic']);
      this.olympic$.subscribe(olympic => {
        if (olympic) {
          this.nameOfCountry = olympic.country;
          this.numberOfEntries = olympic.participations.length;
          this.numberOfMedals = olympic.participations.reduce((acc, curr) => acc + curr.medalsCount, 0);
          this.numberOfAthletes = olympic.participations.reduce((acc, curr) => acc + curr.athleteCount, 0);

          this.lineChartData = [{
            id: olympic.id,
            name: olympic.country,
            series: olympic.participations.map(part => ({
              name: part.year,
              value: part.medalsCount,
              athletes: part.athleteCount
            }))
          }];

          console.log(this.lineChartData);
        }
      });
    });
  }
}
