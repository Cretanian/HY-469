import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationPreviewComponent } from './conversation-preview.component';

describe('ConversationPreviewComponent', () => {
  let component: ConversationPreviewComponent;
  let fixture: ComponentFixture<ConversationPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversationPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
