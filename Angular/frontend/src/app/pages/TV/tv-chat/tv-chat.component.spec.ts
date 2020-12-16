import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvChatComponent } from './tv-chat.component';

describe('TvChatComponent', () => {
  let component: TvChatComponent;
  let fixture: ComponentFixture<TvChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
