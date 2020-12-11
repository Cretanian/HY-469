import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePinComponent } from './mobile-pin.component';

describe('MobilePinComponent', () => {
  let component: MobilePinComponent;
  let fixture: ComponentFixture<MobilePinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilePinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
