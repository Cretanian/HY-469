import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityMessageComponent } from './activity-message.component';

describe('ActivityMessageComponent', () => {
  let component: ActivityMessageComponent;
  let fixture: ComponentFixture<ActivityMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
