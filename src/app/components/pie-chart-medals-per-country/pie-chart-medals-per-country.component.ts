import { Component, OnInit, Input } from '@angular/core';
import { PieChartDataNgxCharts } from 'src/app/core/models/PieChartDataNgxCharts.model';

@Component({
  selector: 'app-pie-chart-medals-per-country',
  templateUrl: './pie-chart-medals-per-country.component.html',
  styleUrls: ['./pie-chart-medals-per-country.component.scss']
})
export class PieChartMedalsPerCountryComponent implements OnInit {

  @Input() results: PieChartDataNgxCharts[] | null = [];

  view: [number, number] = [700, 400];
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: any = 'below'; 

  constructor(
    
  ) { }

  ngOnInit(): void {

  }

}
