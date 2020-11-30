import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallendarHeadComponent } from './callendar-head.component';

describe('CallendarHeadComponent', () => {
  let component: CallendarHeadComponent;
  let fixture: ComponentFixture<CallendarHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallendarHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallendarHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
