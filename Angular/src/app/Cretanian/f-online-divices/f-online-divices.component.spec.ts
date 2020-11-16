import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FOnlineDivicesComponent } from './f-online-divices.component';

describe('FOnlineDivicesComponent', () => {
  let component: FOnlineDivicesComponent;
  let fixture: ComponentFixture<FOnlineDivicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FOnlineDivicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FOnlineDivicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
