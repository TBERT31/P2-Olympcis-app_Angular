import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { Dashboard2Component } from './pages/dashboard2/dashboard2.component';
import { Dashboard3Component } from './pages/dashboard3/dashboard3.component';
import { Detail2Component } from './pages/detail2/detail2.component';
import { Detail3Component } from './pages/detail3/detail3.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [ AppComponent, NotFoundComponent, DetailComponent, TitleComponent, BoxComponent, 
    LineChartMedalsPerYearComponent, PieChartMedalsPerCountryComponent, HeaderComponent, 
    DashboardComponent, Dashboard2Component, Dashboard3Component, Detail2Component, Detail3Component
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgxChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
