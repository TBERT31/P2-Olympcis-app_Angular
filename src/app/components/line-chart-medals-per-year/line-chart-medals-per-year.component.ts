import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { LineChartDataNgxCharts } from 'src/app/core/models/LineChartDataNgxCharts.model';

@Component({
  selector: 'app-line-chart-medals-per-year',
  templateUrl: './line-chart-medals-per-year.component.html',
  styleUrls: ['./line-chart-medals-per-year.component.scss']
})
export class LineChartMedalsPerYearComponent implements OnInit {
  
  @Input() results: LineChartDataNgxCharts[] | null = [];
  @ViewChild('chartContainer') chartContainer!: ElementRef;

  public view: [number, number] = [700, 400];
  private resizeObserver!: ResizeObserver;

  // Ici les attributs du chart sur lesquels potentiellement on veut faire des modifs, 
  // le reste sera noté en dur. 
  //public view: [number, number] = [700, 400];
  public schemeType : any = 'linear';
  public animations : boolean = true;
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

  formatAxisTicks(value: number): string {
    return value.toString(); // Le formatage par défaut ajoute une virgule tous les milliers, ce qui est dérangeant
  }

}
