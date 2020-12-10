import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinnedComponent } from './pinned.component';

describe('PinnedComponent', () => {
  let component: PinnedComponent;
  let fixture: ComponentFixture<PinnedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinnedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinnedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
