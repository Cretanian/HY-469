import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericUpcomingEventsBackgroundComponent } from './generic-upcoming-events-background.component';

describe('GenericUpcomingEventsBackgroundComponent', () => {
  let component: GenericUpcomingEventsBackgroundComponent;
  let fixture: ComponentFixture<GenericUpcomingEventsBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericUpcomingEventsBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericUpcomingEventsBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
