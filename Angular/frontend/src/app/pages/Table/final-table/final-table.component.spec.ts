import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalTableComponent } from './final-table.component';

describe('FinalTableComponent', () => {
  let component: FinalTableComponent;
  let fixture: ComponentFixture<FinalTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
