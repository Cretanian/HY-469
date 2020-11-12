import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FDisplayUpcomingEventsComponent } from './f-display-upcoming-events.component';

describe('FDisplayUpcomingEventsComponent', () => {
  let component: FDisplayUpcomingEventsComponent;
  let fixture: ComponentFixture<FDisplayUpcomingEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FDisplayUpcomingEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FDisplayUpcomingEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
