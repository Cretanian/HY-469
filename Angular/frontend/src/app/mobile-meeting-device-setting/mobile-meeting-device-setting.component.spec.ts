import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMeetingDeviceSettingComponent } from './mobile-meeting-device-setting.component';

describe('MobileMeetingDeviceSettingComponent', () => {
  let component: MobileMeetingDeviceSettingComponent;
  let fixture: ComponentFixture<MobileMeetingDeviceSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileMeetingDeviceSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileMeetingDeviceSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
