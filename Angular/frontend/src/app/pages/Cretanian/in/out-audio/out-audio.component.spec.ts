import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutAudioComponent } from './out-audio.component';

describe('OutAudioComponent', () => {
  let component: OutAudioComponent;
  let fixture: ComponentFixture<OutAudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutAudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
