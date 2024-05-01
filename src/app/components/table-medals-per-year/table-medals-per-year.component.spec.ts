import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMedalsPerYearComponent } from './table-medals-per-year.component';

describe('TableMedalsPerYearComponent', () => {
  let component: TableMedalsPerYearComponent;
  let fixture: ComponentFixture<TableMedalsPerYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMedalsPerYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableMedalsPerYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
