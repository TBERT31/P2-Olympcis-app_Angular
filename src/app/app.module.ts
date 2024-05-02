import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DetailComponent } from './pages/detail/detail.component';
import { TitleComponent } from './components/title/title.component';
import { BoxComponent } from './components/box/box.component';
import { LineChartMedalsPerYearComponent } from './components/line-chart-medals-per-year/line-chart-medals-per-year.component';
import { PieChartMedalsPerCountryComponent } from './components/pie-chart-medals-per-country/pie-chart-medals-per-country.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TableMedalsPerCountryComponent } from './components/table-medals-per-country/table-medals-per-country.component';
import { TableMedalsPerYearComponent } from './components/table-medals-per-year/table-medals-per-year.component';
import { PieChartMedalsPerCountry3Component } from './components/pie-chart-medals-per-country3/pie-chart-medals-per-country3.component';
import { PieChartMedalsPerCountry2Component } from './components/pie-chart-medals-per-country2/pie-chart-medals-per-country2.component';
import { ChartistModule } from "ng-chartist";


@NgModule({
  declarations: [ AppComponent, NotFoundComponent, DetailComponent, TitleComponent, BoxComponent, 
    LineChartMedalsPerYearComponent, PieChartMedalsPerCountryComponent, HeaderComponent, 
    DashboardComponent, TableMedalsPerCountryComponent, TableMedalsPerYearComponent, 
    PieChartMedalsPerCountry3Component, PieChartMedalsPerCountry2Component
  ],
  imports: [BrowserModule, BrowserAnimationsModule, 
    AppRoutingModule, HttpClientModule, NgxChartsModule,
    ChartistModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
