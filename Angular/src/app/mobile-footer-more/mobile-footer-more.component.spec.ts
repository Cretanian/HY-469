import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileFooterMoreComponent } from './mobile-footer-more.component';

describe('MobileFooterMoreComponent', () => {
  let component: MobileFooterMoreComponent;
  let fixture: ComponentFixture<MobileFooterMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileFooterMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileFooterMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
