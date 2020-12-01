import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantTVComponent } from './participant-tv.component';

describe('ParticipantTVComponent', () => {
  let component: ParticipantTVComponent;
  let fixture: ComponentFixture<ParticipantTVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantTVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantTVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
