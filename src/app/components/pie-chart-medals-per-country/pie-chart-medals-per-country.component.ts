import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';  // Directives ViewChild et ElementRef sont utiles ici car pour les charts contrairement aux autres éléments il est difficile de gérer le responsive dans le scss.
import { Router } from '@angular/router';
import { PieChartDataNgxCharts } from 'src/app/core/models/PieChartDataNgxCharts.model';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { DetailContextService } from 'src/app/core/services/detailContext.service';

@Component({
  selector: 'app-pie-chart-medals-per-country',
  templateUrl: './pie-chart-medals-per-country.component.html',
  styleUrls: ['./pie-chart-medals-per-country.component.scss']
})
export class PieChartMedalsPerCountryComponent implements OnInit {

  @Input() results: PieChartDataNgxCharts[] | null = [];  // Décorateur Input utile pour recevoir des paramètres envoyés depuis un autre composant Angular
  @ViewChild('chartContainer') chartContainer!: ElementRef; // J'utilise le décorateur ViewChild qui me permet de catcher mon #chartContainer du template

  // Ici les attributs du chart sur lesquels potentiellement on veut faire des modifs, 
  // le reste sera noté en dur (voir directement leurs options dans le template).
  public view: [number, number] = [700, 400]; // Attention cet attribut devra être gérer via un ResizeObserver et avec les méthodes ngAfterViewInit, setupResizeObserver et ngOnDestroy pour gérer le responsive
  public gradient: boolean = true;
  public showLegend: boolean = true;
  public showLabels: boolean = true;
  public isDoughnut: boolean = false;
  public legendPosition: any = 'below'; 
  public tooltipText = this.formatTooltip.bind(this);

  private resizeObserver!: ResizeObserver; // On définit un ResizeObserver qui est une API du Web permettant d'observer les changements de taille des éléments DOM.

  constructor(
    private olympicService : OlympicService, 
    private router: Router, 
    private detailContextService : DetailContextService 
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

  // L'affichage par défaut des tooltip ne convient pas, on utilise cette fonction dans l'attribut tooltipText. Qui me permet d'ajouter l'icone font-awesome
  formatTooltip(item: any): any {
    return `
      <strong>${item.data.name}</strong>
      <br>
      <i class="fa-solid fa-medal"></i> ${item.value}
    `;
  }

  // Gère les cliques dans le chart, utile notament pour la navigation 
  onClick(event: any): void {
    // Cas du clique dans la légende => Donne le nom du pays directement de type string
    if (typeof event === 'string') {
      const idOlympic = this.olympicService.getOlympicIdByCountry(event);
      if (idOlympic !== null) {
        this.navigateToDetail(idOlympic);
      }
    } 
    // Cas du clique dans le chart => Donne le nom du pays directement sous forme d'un objet {"name": name, "label": name-labelisé, "value": value}
    else if (typeof event === 'object') {
      const idOlympic = this.olympicService.getOlympicIdByCountry(event.name);
      if (idOlympic !== null) {
        this.navigateToDetail(idOlympic);
      }
    }
  }

  navigateToDetail(id: number): void {
    this.detailContextService.setIdDetail(id); // Je change l'id detail de context avant de naviguer vers la page detail
    this.router.navigate(['/detail', id]);  
  }
}
