import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityEmptyComponent } from './activity-empty.component';

describe('ActivityEmptyComponent', () => {
  let component: ActivityEmptyComponent;
  let fixture: ComponentFixture<ActivityEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityEmptyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
