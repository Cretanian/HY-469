import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationMessagePreviewComponent } from './conversation-message-preview.component';

describe('ConversationMessagePreviewComponent', () => {
  let component: ConversationMessagePreviewComponent;
  let fixture: ComponentFixture<ConversationMessagePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversationMessagePreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationMessagePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
