import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';  // Directives ViewChild et ElementRef sont utiles ici car pour les charts contrairement aux autres éléments il est difficile de gérer le responsive dans le scss.
import { LineChartDataNgxCharts } from 'src/app/core/models/LineChartDataNgxCharts.model';

@Component({
  selector: 'app-line-chart-medals-per-year',
  templateUrl: './line-chart-medals-per-year.component.html',
  styleUrls: ['./line-chart-medals-per-year.component.scss']
})
export class LineChartMedalsPerYearComponent implements OnInit {
  
  @Input() results: LineChartDataNgxCharts[] | null = []; // Décorateur Input utile pour recevoir des paramètres envoyés depuis un autre composant Angular
  @ViewChild('chartContainer') chartContainer!: ElementRef; // J'utilise le décorateur ViewChild qui me permet de catcher mon #chartContainer du template

  // Ici les attributs du chart sur lesquels potentiellement on veut faire des modifs, 
  // le reste sera noté en dur. 
  public view: [number, number] = [700, 400]; // Attention cet attribut devra être gérer via un ResizeObserver et avec les méthodes ngAfterViewInit, setupResizeObserver et ngOnDestroy pour gérer le responsive
  public schemeType : any = 'linear';
  public animations : boolean = true;
  public legend : boolean = false;
  // public legendTitle : string = 'Years of participation';
  // public legendPosition : any = 'below';
  public xAxis : boolean = true;
  public yAxis : boolean = true;
  public showXAxisLabel : boolean = true;
  public showYAxisLabel : boolean = true;
  public trimXAxisTicks : boolean = false;
  public trimYAxisTicks : boolean = false;
  public timeline : boolean = false;
  public gradient : boolean = true;
  public xAxisTickFormatting: Function = this.formatAxisTicks;
  public yAxisTickFormatting: Function = this.formatAxisTicks;

  private resizeObserver!: ResizeObserver; // On définit un ResizeObserver qui est une API du Web permettant d'observer les changements de taille des éléments DOM.

  constructor(
    
  ) { }

  ngOnInit(): void {
  }

  /*
    La méthode ngAfterViewInit est appelée après qu'Angular a complètement initialisé la vue du composant, y compris les vues enfants. 
    C'est le bon moment pour effectuer des manipulations DOM ou des initialisations qui dépendent de la présence des éléments enfants. 
    C'est ce que l'on fait pour mettre en place l'observateur de redimensionnement.
  */
  ngAfterViewInit(): void {
    this.setupResizeObserver();
  }

  /*
    La méthode setupResizeObserver configure un ResizeObserver qui est une API du Web permettant d'observer les changements de taille des éléments DOM. 
    C'est particulièrement utile pour les composants comme ngx-charts qui ne sont pas entièrement gérés par les feuilles de style CSS/SCSS.
  */
  setupResizeObserver() {
    this.resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const { width } = entry.contentRect;
        if (width > 700) {
          this.view = [700, 350];
        } else if (width > 500) {
          this.view = [500, 250];
        } else if (width > 300) {
          this.view = [300, 150];
        } else {
          this.view = [200, 100];
        }
      }
    });

    if (this.chartContainer.nativeElement) {
      this.resizeObserver.observe(this.chartContainer.nativeElement);
    }
  }

  // On utilise ngOnDestroy pour se désabonner des observateurs et des événements pour éviter les fuites de mémoire.
  ngOnDestroy(): void {
    if (this.resizeObserver && this.chartContainer.nativeElement) {
      this.resizeObserver.unobserve(this.chartContainer.nativeElement);
    }
  }

  // Le formatage par défaut ajoute une virgule tous les milliers, ce qui est dérangeant
  formatAxisTicks(value: number): string {
    return value.toString(); 
  }

}
