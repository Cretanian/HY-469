import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMessageComponent } from './mobile-message.component';

describe('MobileMessageComponent', () => {
  let component: MobileMessageComponent;
  let fixture: ComponentFixture<MobileMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
