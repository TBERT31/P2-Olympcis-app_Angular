import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
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

  @Input() results: PieChartDataNgxCharts[] | null = [];
  @ViewChild('chartContainer') chartContainer!: ElementRef;

  public view: [number, number] = [700, 400];
  private resizeObserver!: ResizeObserver;

  // Ici les attributs du chart sur lesquels potentiellement on veut faire des modifs, 
  // le reste sera noté en dur. 
  // public view: [number, number] = [700, 350];
  public gradient: boolean = true;
  public showLegend: boolean = true;
  public showLabels: boolean = true;
  public isDoughnut: boolean = false;
  public legendPosition: any = 'below'; 
  public tooltipText = this.formatTooltip.bind(this);

  constructor(
    private olympicService : OlympicService,
    private router: Router,
    private detailContextService : DetailContextService
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.setupResizeObserver();
  }

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

  ngOnDestroy(): void {
    if (this.resizeObserver && this.chartContainer.nativeElement) {
      this.resizeObserver.unobserve(this.chartContainer.nativeElement);
    }
  }

  formatTooltip(item: any): any {
    return `
      <strong>${item.data.name}</strong>
      <br>
      <i class="fa-solid fa-medal"></i> ${item.value}
    `;
  }

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
    this.detailContextService.setIdDetail(id); // Je change l'id detail de context avant de renaviguer
    this.router.navigate(['/detail', id]);  
  }
}
