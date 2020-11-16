import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvChatOnComponent } from './tv-chat-on.component';

describe('TvChatOnComponent', () => {
  let component: TvChatOnComponent;
  let fixture: ComponentFixture<TvChatOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvChatOnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvChatOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
