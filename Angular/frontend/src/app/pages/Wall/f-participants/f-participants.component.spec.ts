import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FParticipantsComponent } from './f-participants.component';

describe('FParticipantsComponent', () => {
  let component: FParticipantsComponent;
  let fixture: ComponentFixture<FParticipantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FParticipantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
