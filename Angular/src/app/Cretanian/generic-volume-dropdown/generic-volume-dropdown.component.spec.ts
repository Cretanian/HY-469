import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericVolumeDropdownComponent } from './generic-volume-dropdown.component';

describe('GenericVolumeDropdownComponent', () => {
  let component: GenericVolumeDropdownComponent;
  let fixture: ComponentFixture<GenericVolumeDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericVolumeDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericVolumeDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
