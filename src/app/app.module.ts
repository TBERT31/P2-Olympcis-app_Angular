import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DetailComponent } from './pages/detail/detail.component';
import { LineChartMedalsPerYearComponent } from './components/line-chart-medals-per-year/line-chart-medals-per-year.component';
import { PieChartMedalsPerCountryComponent } from './components/pie-chart-medals-per-country/pie-chart-medals-per-country.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TableMedalsPerCountryComponent } from './components/table-medals-per-country/table-medals-per-country.component';
import { TableMedalsPerYearComponent } from './components/table-medals-per-year/table-medals-per-year.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HeadingComponent } from './components/heading/heading.component';

@NgModule({
  declarations: [ AppComponent, NotFoundComponent, DetailComponent, SpinnerComponent, HeadingComponent,
    LineChartMedalsPerYearComponent, PieChartMedalsPerCountryComponent, NavigationComponent, 
    DashboardComponent, TableMedalsPerCountryComponent, TableMedalsPerYearComponent, 
  ],
  imports: [BrowserModule, BrowserAnimationsModule, 
    AppRoutingModule, HttpClientModule, NgxChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
