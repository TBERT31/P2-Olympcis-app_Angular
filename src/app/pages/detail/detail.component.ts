import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { LineChartDataNgxCharts } from 'src/app/core/models/LineChartDataNgxCharts.model';
import { Olympic } from 'src/app/core/models/Olympic.model';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { Box } from 'src/app/core/models/box.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {
  public olympic$: Observable<Olympic | undefined> = of(undefined);
  private subscription: Subscription = new Subscription();

  // Variables à afficher
  public nameOfCountry: string = 'No country seems to correspond to this identifier';  // Correct typo here as well for consistency
  public numberOfEntries: number = 0;
  public numberOfMedals: number = 0;
  public numberOfAthletes: number = 0;
  public boxes: Box[] = [];
  public lineChartData: LineChartDataNgxCharts[] | null = null;  // Use camelCase for variable name

  // Variables utiles pour gérer le chargement et les erreurs
  public error: boolean = false;
  public loading : boolean = true;

  constructor(
    private olympicService: OlympicService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.olympic$ = this.olympicService.getOlympicById(+this.activatedRoute.snapshot.params['idOlympic']);
    this.subscription = this.olympic$.subscribe(olympic => {
      this.loading = false; // On indique que le chargement est fini
      if (olympic) {
        this.error = false; // On indique qu'il n'y a pas eu d'erreur lors du fetch des données

        // On met à jour les affichages dynamiques
        this.nameOfCountry = olympic.country;
        this.numberOfEntries = olympic.participations.length;
        this.numberOfMedals = olympic.participations.reduce((acc, curr) => acc + curr.medalsCount, 0);
        this.numberOfAthletes = olympic.participations.reduce((acc, curr) => acc + curr.athleteCount, 0);

        // On construit l'objet "boxes" qui est envoyé en paramètre du composant heading
        this.boxes = [
          { label: 'Number of entries', content: this.numberOfEntries },
          { label: 'Total number medals', content: this.numberOfMedals },
          { label: 'Total number of athletes', content: this.numberOfAthletes },
        ];

        // On formatte la données obtenu de l'observable afin de pouvoir les exploiter dans le line chart de ngx-charts
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
        this.error = true;  // On indique qu'il y a eu une erreur lors du fetch des données
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
