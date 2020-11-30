import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerTeamsCalendarComponent } from './explorer-teams-calendar.component';

describe('ExplorerTeamsCalendarComponent', () => {
  let component: ExplorerTeamsCalendarComponent;
  let fixture: ComponentFixture<ExplorerTeamsCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorerTeamsCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorerTeamsCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
