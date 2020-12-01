import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysEventsComponent } from './todays-events.component';

describe('TodaysEventsComponent', () => {
  let component: TodaysEventsComponent;
  let fixture: ComponentFixture<TodaysEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaysEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
