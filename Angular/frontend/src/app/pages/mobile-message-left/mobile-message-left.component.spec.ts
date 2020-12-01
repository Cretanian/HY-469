import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMessageLeftComponent } from './mobile-message-left.component';

describe('MobileMessageLeftComponent', () => {
  let component: MobileMessageLeftComponent;
  let fixture: ComponentFixture<MobileMessageLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileMessageLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileMessageLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
