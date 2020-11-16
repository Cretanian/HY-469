import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OncallCallSettingsComponent } from './oncall-call-settings.component';

describe('OncallCallSettingsComponent', () => {
  let component: OncallCallSettingsComponent;
  let fixture: ComponentFixture<OncallCallSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OncallCallSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OncallCallSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
