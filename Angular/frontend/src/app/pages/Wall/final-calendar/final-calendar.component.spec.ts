import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalCalendarComponent } from './final-calendar.component';

describe('FinalCalendarComponent', () => {
  let component: FinalCalendarComponent;
  let fixture: ComponentFixture<FinalCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
