import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantsTVComponent } from './participants-tv.component';

describe('ParticipantsTVComponent', () => {
  let component: ParticipantsTVComponent;
  let fixture: ComponentFixture<ParticipantsTVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantsTVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantsTVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
