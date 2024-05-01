import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PieChartDataNgxCharts } from 'src/app/core/models/PieChartDataNgxCharts.model';

@Component({
  selector: 'app-table-medals-per-country',
  templateUrl: './table-medals-per-country.component.html',
  styleUrls: ['./table-medals-per-country.component.scss']
})
export class TableMedalsPerCountryComponent implements OnInit {

  @Input() results: PieChartDataNgxCharts[] | null = null;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  navigateToDetail(id: number): void {
    this.router.navigate(['/detail', 1, id]);  
  }

}
