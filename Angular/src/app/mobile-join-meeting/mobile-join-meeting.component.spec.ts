import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileJoinMeetingComponent } from './mobile-join-meeting.component';

describe('MobileJoinMeetingComponent', () => {
  let component: MobileJoinMeetingComponent;
  let fixture: ComponentFixture<MobileJoinMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileJoinMeetingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileJoinMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
