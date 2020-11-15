import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarMobileComponent } from './calendar-mobile.component';

describe('CalendarMobileComponent', () => {
  let component: CalendarMobileComponent;
  let fixture: ComponentFixture<CalendarMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
