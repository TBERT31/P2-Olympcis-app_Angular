import { Component, OnInit } from '@angular/core';
import { ChartType } from 'ng-chartist';


@Component({
  selector: 'app-pie-chart-medals-per-country2',
  templateUrl: './pie-chart-medals-per-country2.component.html',
  styleUrls: ['./pie-chart-medals-per-country2.component.scss']
})
export class PieChartMedalsPerCountry2Component implements OnInit {

  type: ChartType = 'Pie';
  data = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    series: [20, 10, 70]
  };
  options = {
    donut: true,
    donutWidth: 60,
    startAngle: 270,
    total: 100,
    showLabel: true
  };

  constructor(

  ) { }

  ngOnInit(): void {

  }

}
