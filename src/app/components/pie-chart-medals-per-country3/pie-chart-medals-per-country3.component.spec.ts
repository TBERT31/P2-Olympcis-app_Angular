import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartMedalsPerCountry3Component } from './pie-chart-medals-per-country3.component';

describe('PieChartMedalsPerCountry3Component', () => {
  let component: PieChartMedalsPerCountry3Component;
  let fixture: ComponentFixture<PieChartMedalsPerCountry3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartMedalsPerCountry3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChartMedalsPerCountry3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
