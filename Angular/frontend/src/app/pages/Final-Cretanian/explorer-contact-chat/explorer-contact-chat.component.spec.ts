import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerContactChatComponent } from './explorer-contact-chat.component';

describe('ExplorerContactChatComponent', () => {
  let component: ExplorerContactChatComponent;
  let fixture: ComponentFixture<ExplorerContactChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorerContactChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorerContactChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
