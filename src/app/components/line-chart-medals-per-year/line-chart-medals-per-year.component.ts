import { Component, OnInit, Input } from '@angular/core';
import { LineChartDataNgxCharts } from 'src/app/core/models/LineChartDataNgxCharts.model';

@Component({
  selector: 'app-line-chart-medals-per-year',
  templateUrl: './line-chart-medals-per-year.component.html',
  styleUrls: ['./line-chart-medals-per-year.component.scss']
})
export class LineChartMedalsPerYearComponent implements OnInit {
  
  @Input() results: LineChartDataNgxCharts[] | null = [];

  // Ici les attributs du chart sur lesquels potentiellement on veut faire des modifs, 
  // le reste sera noté en dur. 
  public view: [number, number] = [700, 400];
  public schemeType : any = 'linear';
  public animations : boolean = false;
  public legend : boolean = false;
  // public legendTitle : string = 'Years of participation';
  // public legendPosition : any = 'below';
  public xAxis : boolean = true;
  public yAxis : boolean = true;
  public showXAxisLabel : boolean = true;
  public showYAxisLabel : boolean = true;
  public trimXAxisTicks : boolean = false;
  public trimYAxisTicks : boolean = false;
  public timeline : boolean = false;
  public gradient : boolean = true;
  public xAxisTickFormatting: Function = this.formatAxisTicks;
  public yAxisTickFormatting: Function = this.formatAxisTicks;

  constructor(
    
  ) { }

  ngOnInit(): void {
  }

  formatAxisTicks(value: number): string {
    return value.toString(); // Le formatage par défaut ajoute une virgule tous les milliers, ce qui est dérangeant
  }

}
