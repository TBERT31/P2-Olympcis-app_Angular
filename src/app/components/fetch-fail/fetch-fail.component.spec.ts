import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchFailComponent } from './fetch-fail.component';

describe('FetchFailComponent', () => {
  let component: FetchFailComponent;
  let fixture: ComponentFixture<FetchFailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchFailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
