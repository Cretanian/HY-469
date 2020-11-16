import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVIncomingCallComponent } from './tv-incoming-call.component';

describe('TVIncomingCallComponent', () => {
  let component: TVIncomingCallComponent;
  let fixture: ComponentFixture<TVIncomingCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TVIncomingCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TVIncomingCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
