import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerTeamConversationComponent } from './explorer-team-conversation.component';

describe('ExplorerTeamConversationComponent', () => {
  let component: ExplorerTeamConversationComponent;
  let fixture: ComponentFixture<ExplorerTeamConversationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorerTeamConversationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorerTeamConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
