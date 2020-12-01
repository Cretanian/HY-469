import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileChatBarComponent } from './mobile-chat-bar.component';

describe('MobileChatBarComponent', () => {
  let component: MobileChatBarComponent;
  let fixture: ComponentFixture<MobileChatBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileChatBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileChatBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
