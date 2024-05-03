import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Olympic } from 'src/app/core/models/Olympic.model';
import { PieChartDataNgxCharts } from 'src/app/core/models/PieChartDataNgxCharts.model';
import { OlympicService } from 'src/app/core/services/olympic.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  // Observables qui permet de get les données du tableau et du chart
  public olympics$: Observable<Olympic[] | null> = of(null);

  // Variables à afficher
  public numberOfJo: number = 0;
  public numberOfCountries: number = 0;
  public pieChartData: PieChartDataNgxCharts[] | null = null;

  // Variables utiles pour gérer le chargement et les erreurs
  public error: boolean = false;
  public loading : boolean = true;

  constructor(
    private olympicService: OlympicService, 
  ) {}

  ngOnInit(): void {
    this.olympicService.loadInitialData();  // Pas vraiment nécessaire car déjà initilisé dans app-component.ts, cependant si le fichier a été mis à jour cela permet d'avoir la nouvelle version.
    this.olympics$ = this.olympicService.getOlympics();
  
    this.olympics$.subscribe((data) => {
      this.loading = false; // On indique que le chargement est fini
      if(data){
        this.error = false; // On indique qu'il n'y a pas eu d'erreur lors du fetch des données

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
      }else{
        this.error = true; // On indique qu'il y a eu une erreur lors du fetch des données
      }
    })
  
  }

}
