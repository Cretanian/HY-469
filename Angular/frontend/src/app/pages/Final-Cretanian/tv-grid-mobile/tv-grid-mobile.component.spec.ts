import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVGridMobileComponent } from './tv-grid-mobile.component';

describe('TVGridMobileComponent', () => {
  let component: TVGridMobileComponent;
  let fixture: ComponentFixture<TVGridMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TVGridMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TVGridMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
