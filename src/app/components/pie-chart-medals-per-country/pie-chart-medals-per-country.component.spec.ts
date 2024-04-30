import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartMedalsPerCountryComponent } from './pie-chart-medals-per-country.component';

describe('PieChartMedalsPerCountryComponent', () => {
  let component: PieChartMedalsPerCountryComponent;
  let fixture: ComponentFixture<PieChartMedalsPerCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartMedalsPerCountryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChartMedalsPerCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
