import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnOncallButtonComponent } from './return-oncall-button.component';

describe('ReturnOncallButtonComponent', () => {
  let component: ReturnOncallButtonComponent;
  let fixture: ComponentFixture<ReturnOncallButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnOncallButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnOncallButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
