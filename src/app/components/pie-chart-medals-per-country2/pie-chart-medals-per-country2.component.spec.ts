import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartMedalsPerCountry2Component } from './pie-chart-medals-per-country2.component';

describe('PieChartMedalsPerCountry2Component', () => {
  let component: PieChartMedalsPerCountry2Component;
  let fixture: ComponentFixture<PieChartMedalsPerCountry2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartMedalsPerCountry2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChartMedalsPerCountry2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
