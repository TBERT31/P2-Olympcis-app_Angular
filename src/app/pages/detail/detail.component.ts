import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Olympic } from 'src/app/core/models/Olympic.model';
import { PieChartDataNgxCharts } from 'src/app/core/models/PieChartDataNgxCharts.model';
import { OlympicService } from 'src/app/core/services/olympic.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public olympic$: Observable<Olympic | undefined> = of(undefined);

  public nameOfContry: string = '';
  public numberOfEntries: number = 0;
  public numberOfMedals: number = 0;
  public numberOfAthletes: number = 0;
  public pieChartData: PieChartDataNgxCharts[] | null = null;

  constructor(
    private olympicService: OlympicService
  ) {}

  ngOnInit(): void {
    this.olympicService.loadInitialData().subscribe(() => {
      this.olympic$ = this.olympicService.getOlympicById(1);
      this.olympic$.subscribe(olympic => {
        console.log(olympic);
        if (olympic) {
          // On remplie les boxes du haut de page (sous le titre)
          this.nameOfContry = olympic.country;
          this.numberOfEntries = olympic.participations.length;  // Nombre de participation du pays concerné
          this.numberOfMedals = olympic.participations.reduce((acc, curr) => acc + curr.medalsCount, 0);  // Somme des médailles gagné par le pays
          this.numberOfAthletes = olympic.participations.reduce((acc, curr) => acc + curr.athleteCount, 0);  // Somme des athletes ayant participé toutes années confondues
        
          
        }
      });
    });
  }
}
