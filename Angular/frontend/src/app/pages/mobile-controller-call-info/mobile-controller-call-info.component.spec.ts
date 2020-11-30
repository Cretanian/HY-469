import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileControllerCallInfoComponent } from './mobile-controller-call-info.component';

describe('MobileControllerCallInfoComponent', () => {
  let component: MobileControllerCallInfoComponent;
  let fixture: ComponentFixture<MobileControllerCallInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileControllerCallInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileControllerCallInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
