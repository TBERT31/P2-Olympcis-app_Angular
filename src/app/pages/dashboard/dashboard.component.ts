import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Olympic } from 'src/app/core/models/Olympic.model';
import { PieChartDataNgxCharts } from 'src/app/core/models/PieChartDataNgxCharts.model';
import { OlympicService } from 'src/app/core/services/olympic.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public olympics$: Observable<Olympic[] | null> = of(null);

  public numberOfJo: number = 0;
  public numberOfCountries: number = 0;
  public pieChartData: PieChartDataNgxCharts[] | null = null;

  constructor(
    private olympicService: OlympicService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.olympicService.loadInitialData();
    this.olympics$ = this.olympicService.getOlympics();
    
    console.log(this.olympics$);
  
    this.olympics$.subscribe((data) => {
      if(data){
        /* Cas où l'on supporse qu'il n'y a pas d'erreurs dans les données, 
        c'est à dire, pas deux fois le même pays dans le tableau. */
        //this.numberOfCountries = data.length; 

        /* Cas où je ne fait pas confiance dans les données qui me sont transmises dans le json, 
        et qu'il y a possiblement des doublons de pays*/
        const contries = new Set(data.map(olympic => olympic.country));
        this.numberOfCountries = contries.size;

        /* Ici je vais scrapper l'année de participation de chaque pays, 
        je stock cela dans un set pour éviter les doublons car il y en aura forcement*/
        const years = new Set(data.flatMap(olympic => olympic.participations.map(participation => participation.year)));

        // Mise à jour du nombre d'années uniques de JO
        this.numberOfJo = years.size;

        this.pieChartData  = data.map(olympic => {

          // On additionne le nombre de médails par pays au court de chaque participation avec un accumulateur et la méthode reduce
          const totalMedals = olympic.participations.reduce((acc, curr) => acc + curr.medalsCount, 0);

          // On formatte au format attendu par Ngx-Charts
          return {
            id: olympic.id,
            name: olympic.country,
            value: totalMedals,
          };
        });
  
        console.log(this.pieChartData);
      }
    })
  
  }

}
