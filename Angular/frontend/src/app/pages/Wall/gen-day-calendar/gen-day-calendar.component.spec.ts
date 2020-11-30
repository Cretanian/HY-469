import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenDayCalendarComponent } from './gen-day-calendar.component';

describe('GenDayCalendarComponent', () => {
  let component: GenDayCalendarComponent;
  let fixture: ComponentFixture<GenDayCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenDayCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenDayCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
