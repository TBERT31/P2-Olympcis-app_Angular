import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Olympic } from 'src/app/core/models/Olympic.model';
import { OlympicService } from 'src/app/core/services/olympic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public olympics$: Observable<Olympic[] | null> = of(null);

  public numberOfJo: number = 0;
  public numberOfCountries: number = 0;

  constructor(
    private olympicService: OlympicService
  ) {}

  ngOnInit(): void {
    this.olympicService.loadInitialData();
    this.olympics$ = this.olympicService.getOlympics();
    
    console.log(this.olympics$);
  
    this.olympics$.subscribe((data) => {
      if(data){
        /* Cas où on  supporse ici qu'il n'y a pas d'erreurs dans les données, 
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
      }
    })
  
  }
}
