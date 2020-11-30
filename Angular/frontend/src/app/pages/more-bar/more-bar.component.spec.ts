import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreBarComponent } from './more-bar.component';

describe('MoreBarComponent', () => {
  let component: MoreBarComponent;
  let fixture: ComponentFixture<MoreBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
