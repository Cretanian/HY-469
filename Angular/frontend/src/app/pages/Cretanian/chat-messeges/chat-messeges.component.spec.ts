import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMessegesComponent } from './chat-messeges.component';

describe('ChatMessegesComponent', () => {
  let component: ChatMessegesComponent;
  let fixture: ComponentFixture<ChatMessegesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatMessegesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatMessegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
