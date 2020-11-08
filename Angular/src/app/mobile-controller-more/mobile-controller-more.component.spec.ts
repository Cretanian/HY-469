import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileControllerMoreComponent } from './mobile-controller-more.component';

describe('MobileControllerMoreComponent', () => {
  let component: MobileControllerMoreComponent;
  let fixture: ComponentFixture<MobileControllerMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileControllerMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileControllerMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
