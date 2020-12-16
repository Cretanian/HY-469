import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerCallChatComponent } from './controller-call-chat.component';

describe('ControllerCallChatComponent', () => {
  let component: ControllerCallChatComponent;
  let fixture: ComponentFixture<ControllerCallChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControllerCallChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerCallChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
