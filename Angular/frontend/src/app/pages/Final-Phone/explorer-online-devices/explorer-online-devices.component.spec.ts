import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerOnlineDevicesComponent } from './explorer-online-devices.component';

describe('ExplorerOnlineDevicesComponent', () => {
  let component: ExplorerOnlineDevicesComponent;
  let fixture: ComponentFixture<ExplorerOnlineDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorerOnlineDevicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorerOnlineDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
