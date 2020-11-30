import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVGridComponent } from './tvgrid.component';

describe('TVGridComponent', () => {
  let component: TVGridComponent;
  let fixture: ComponentFixture<TVGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TVGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TVGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
