import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PieChartDataNgxCharts } from 'src/app/core/models/PieChartDataNgxCharts.model';
import { OlympicService } from 'src/app/core/services/olympic.service';

@Component({
  selector: 'app-pie-chart-medals-per-country',
  templateUrl: './pie-chart-medals-per-country.component.html',
  styleUrls: ['./pie-chart-medals-per-country.component.scss']
})
export class PieChartMedalsPerCountryComponent implements OnInit {

  @Input() results: PieChartDataNgxCharts[] | null = [];

  // Ici les attributs du chart sur lesquels potentiellement on veut faire des modifs, 
  // le reste sera noté en dur. 
  public view: [number, number] = [700, 400];
  public gradient: boolean = true;
  public showLegend: boolean = true;
  public showLabels: boolean = true;
  public isDoughnut: boolean = false;
  public legendPosition: any = 'below'; 
  public tooltipText = this.formatTooltip.bind(this);

  constructor(
    private olympicService : OlympicService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  formatTooltip(item: any): any {
    return `<strong>${item.data.name}</strong><br><i class="fa-solid fa-medal"></i> ${item.value}`;
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
    this.router.navigate(['/detail', id]);  
  }


}
