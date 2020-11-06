import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineDevicesComponent } from './online-devices.component';

describe('OnlineDevicesComponent', () => {
  let component: OnlineDevicesComponent;
  let fixture: ComponentFixture<OnlineDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineDevicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
