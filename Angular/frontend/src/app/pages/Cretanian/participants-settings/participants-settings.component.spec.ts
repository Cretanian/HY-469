import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantsSettingsComponent } from './participants-settings.component';

describe('ParticipantsSettingsComponent', () => {
  let component: ParticipantsSettingsComponent;
  let fixture: ComponentFixture<ParticipantsSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantsSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
