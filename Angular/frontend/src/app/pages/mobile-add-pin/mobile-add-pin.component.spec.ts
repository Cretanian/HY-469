import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAddPinComponent } from './mobile-add-pin.component';

describe('MobileAddPinComponent', () => {
  let component: MobileAddPinComponent;
  let fixture: ComponentFixture<MobileAddPinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileAddPinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileAddPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
