import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantsWindowComponent } from './participants-window.component';

describe('ParticipantsWindowComponent', () => {
  let component: ParticipantsWindowComponent;
  let fixture: ComponentFixture<ParticipantsWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantsWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantsWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
