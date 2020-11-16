import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tv3mainComponent } from './tv3main.component';

describe('Tv3mainComponent', () => {
  let component: Tv3mainComponent;
  let fixture: ComponentFixture<Tv3mainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tv3mainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tv3mainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
