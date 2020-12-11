import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePinboardComponent } from './mobile-pinboard.component';

describe('MobilePinboardComponent', () => {
  let component: MobilePinboardComponent;
  let fixture: ComponentFixture<MobilePinboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilePinboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePinboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
