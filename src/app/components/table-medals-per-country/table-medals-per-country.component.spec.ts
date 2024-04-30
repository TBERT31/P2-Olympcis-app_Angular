import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMedalsPerCountryComponent } from './table-medals-per-country.component';

describe('TableMedalsPerCountryComponent', () => {
  let component: TableMedalsPerCountryComponent;
  let fixture: ComponentFixture<TableMedalsPerCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMedalsPerCountryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableMedalsPerCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
