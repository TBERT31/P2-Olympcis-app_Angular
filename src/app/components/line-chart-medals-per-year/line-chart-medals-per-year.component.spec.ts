import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartMedalsPerYearComponent } from './line-chart-medals-per-year.component';

describe('LineChartMedalsPerYearComponent', () => {
  let component: LineChartMedalsPerYearComponent;
  let fixture: ComponentFixture<LineChartMedalsPerYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineChartMedalsPerYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineChartMedalsPerYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
