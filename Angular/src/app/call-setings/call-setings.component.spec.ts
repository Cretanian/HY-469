import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallSetingsComponent } from './call-setings.component';

describe('CallSetingsComponent', () => {
  let component: CallSetingsComponent;
  let fixture: ComponentFixture<CallSetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallSetingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallSetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
