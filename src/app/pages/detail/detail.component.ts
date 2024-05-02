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

  // Variables à afficher
  public nameOfCountry: string = 'No country seems to correspond to this identifier';  // Correct typo here as well for consistency
  public numberOfEntries: number = 0;
  public numberOfMedals: number = 0;
  public numberOfAthletes: number = 0;
  public lineChartData: LineChartDataNgxCharts[] | null = null;  // Use camelCase for variable name

  // Variables utiles pour gérer le chargement et les erreurs
  public error: boolean = false;
  public loading : boolean = true;

  constructor(
    private olympicService: OlympicService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.olympicService.loadInitialData().subscribe(() => {
      this.olympic$ = this.olympicService.getOlympicById(+this.router.snapshot.params['idOlympic']);
      this.olympic$.subscribe(olympic => {
        this.loading = false;
        if (olympic) {
          this.error = false;
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

        }else{
          this.error = true;
        }
      });
    });
  }
}
