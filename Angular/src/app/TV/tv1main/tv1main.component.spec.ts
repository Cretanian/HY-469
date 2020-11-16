import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tv1mainComponent } from './tv1main.component';

describe('Tv1mainComponent', () => {
  let component: Tv1mainComponent;
  let fixture: ComponentFixture<Tv1mainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tv1mainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tv1mainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
