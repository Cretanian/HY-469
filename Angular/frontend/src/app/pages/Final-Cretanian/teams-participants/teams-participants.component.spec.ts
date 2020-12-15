import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsParticipantsComponent } from './teams-participants.component';

describe('TeamsParticipantsComponent', () => {
  let component: TeamsParticipantsComponent;
  let fixture: ComponentFixture<TeamsParticipantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsParticipantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
