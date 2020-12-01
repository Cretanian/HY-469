import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerChatComponent } from './explorer-chat.component';

describe('ExplorerChatComponent', () => {
  let component: ExplorerChatComponent;
  let fixture: ComponentFixture<ExplorerChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorerChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorerChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
