import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PieChartDataNgxCharts } from 'src/app/core/models/PieChartDataNgxCharts.model';
import { DetailContextService } from 'src/app/core/services/detailContext.service';

@Component({
  selector: 'app-table-medals-per-country',
  templateUrl: './table-medals-per-country.component.html',
  styleUrls: ['./table-medals-per-country.component.scss']
})
export class TableMedalsPerCountryComponent implements OnInit {

  @Input() results: PieChartDataNgxCharts[] | null = null;

  constructor(
    private router: Router,
    private detailContextService : DetailContextService
  ) { }

  ngOnInit(): void {

  }

  navigateToDetail(id: number): void {
    this.detailContextService.setIdDetail(id); // Je change l'id detail de context avant de naviguer vers la page detail
    this.router.navigate(['/detail', id]);  
  }

}
