import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tv3x3mainComponent } from './tv3x3main.component';

describe('Tv3x3mainComponent', () => {
  let component: Tv3x3mainComponent;
  let fixture: ComponentFixture<Tv3x3mainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tv3x3mainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tv3x3mainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
