import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FCallSettingsComponent } from './f-call-settings.component';

describe('FCallSettingsComponent', () => {
  let component: FCallSettingsComponent;
  let fixture: ComponentFixture<FCallSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FCallSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FCallSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
