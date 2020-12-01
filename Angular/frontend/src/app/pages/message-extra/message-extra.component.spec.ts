import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageExtraComponent } from './message-extra.component';

describe('MessageExtraComponent', () => {
  let component: MessageExtraComponent;
  let fixture: ComponentFixture<MessageExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageExtraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
