import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FCalendarPhoneComponent } from './f-calendar-phone.component';

describe('FCalendarPhoneComponent', () => {
  let component: FCalendarPhoneComponent;
  let fixture: ComponentFixture<FCalendarPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FCalendarPhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FCalendarPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
