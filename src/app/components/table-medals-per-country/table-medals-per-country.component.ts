import { Component, OnInit, Input } from '@angular/core';
import { Olympic } from 'src/app/core/models/Olympic.model';
import { PieChartDataNgxCharts } from 'src/app/core/models/PieChartDataNgxCharts.model';

@Component({
  selector: 'app-table-medals-per-country',
  templateUrl: './table-medals-per-country.component.html',
  styleUrls: ['./table-medals-per-country.component.scss']
})
export class TableMedalsPerCountryComponent implements OnInit {

  @Input() results: PieChartDataNgxCharts[] | null = null;

  constructor() { }

  ngOnInit(): void {

  }

}
