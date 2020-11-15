import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FChatComponent } from './f-chat.component';

describe('FChatComponent', () => {
  let component: FChatComponent;
  let fixture: ComponentFixture<FChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
