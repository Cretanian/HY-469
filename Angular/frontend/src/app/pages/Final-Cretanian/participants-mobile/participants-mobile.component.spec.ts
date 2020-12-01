import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantsMobileComponent } from './participants-mobile.component';

describe('ParticipantsMobileComponent', () => {
  let component: ParticipantsMobileComponent;
  let fixture: ComponentFixture<ParticipantsMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantsMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
