import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallendaEventWallComponent } from './callenda-event-wall.component';

describe('CallendaEventWallComponent', () => {
  let component: CallendaEventWallComponent;
  let fixture: ComponentFixture<CallendaEventWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallendaEventWallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallendaEventWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
