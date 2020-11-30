import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAnswerCallComponent } from './table-answer-call.component';

describe('TableAnswerCallComponent', () => {
  let component: TableAnswerCallComponent;
  let fixture: ComponentFixture<TableAnswerCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAnswerCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAnswerCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
