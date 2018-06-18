import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperaturePressureWindComponent } from './temperature-pressure-wind.component';

describe('TemperaturePressureWindComponent', () => {
  let component: TemperaturePressureWindComponent;
  let fixture: ComponentFixture<TemperaturePressureWindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperaturePressureWindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperaturePressureWindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
