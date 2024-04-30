import { Component, OnInit, Input } from '@angular/core';
import { PieChartDataNgxCharts } from 'src/app/core/models/PieChartDataNgxCharts.model';

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
    
  ) { }

  ngOnInit(): void {

  }

  formatTooltip(item: any): any {
    return `<strong>${item.data.name}</strong><br><i class="fa-solid fa-medal"></i> ${item.value}`;
  }

}
