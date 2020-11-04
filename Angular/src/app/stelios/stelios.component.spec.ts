import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteliosComponent } from './stelios.component';

describe('SteliosComponent', () => {
  let component: SteliosComponent;
  let fixture: ComponentFixture<SteliosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteliosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SteliosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
