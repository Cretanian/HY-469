import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioSettingsCameraComponent } from './audio-settings-camera.component';

describe('AudioSettingsCameraComponent', () => {
  let component: AudioSettingsCameraComponent;
  let fixture: ComponentFixture<AudioSettingsCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioSettingsCameraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioSettingsCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
