import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingEventsItemComponent } from './upcoming-events-item.component';

describe('UpcomingEventsItemComponent', () => {
  let component: UpcomingEventsItemComponent;
  let fixture: ComponentFixture<UpcomingEventsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingEventsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingEventsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
