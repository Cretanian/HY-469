import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerCalendarComponent } from './explorer-calendar.component';

describe('ExplorerCalendarComponent', () => {
  let component: ExplorerCalendarComponent;
  let fixture: ComponentFixture<ExplorerCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorerCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorerCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
