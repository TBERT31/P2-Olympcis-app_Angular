import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DetailComponent } from './pages/detail/detail.component';
import { TopComponent } from './components/top/top.component';
import { BoxComponent } from './components/box/box.component';
import { LineChartMedalsPerYearComponent } from './components/line-chart-medals-per-year/line-chart-medals-per-year.component';
import { PieChartMedalsPerCountryComponent } from './components/pie-chart-medals-per-country/pie-chart-medals-per-country.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent, DetailComponent, TopComponent, BoxComponent, LineChartMedalsPerYearComponent, PieChartMedalsPerCountryComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
