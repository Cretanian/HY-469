import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysCalendarListComponent } from './days-calendar-list.component';

describe('DaysCalendarListComponent', () => {
  let component: DaysCalendarListComponent;
  let fixture: ComponentFixture<DaysCalendarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaysCalendarListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysCalendarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
