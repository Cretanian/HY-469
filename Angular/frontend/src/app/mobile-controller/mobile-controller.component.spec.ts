import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileControllerComponent } from './mobile-controller.component';

describe('MobileControllerComponent', () => {
  let component: MobileControllerComponent;
  let fixture: ComponentFixture<MobileControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
