import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LineChartSeriesData } from 'src/app/core/models/LineChartDataNgxCharts.model';

@Component({
  selector: 'app-table-medals-per-year',
  templateUrl: './table-medals-per-year.component.html',
  styleUrls: ['./table-medals-per-year.component.scss']
})
export class TableMedalsPerYearComponent implements OnInit {

  @Input() results: LineChartSeriesData[] | null = null;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  navigateToDashboard(): void {
    this.router.navigate(['dashboard']);  
  }
}
