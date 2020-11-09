import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableParticipantComponent } from './table-participant.component';

describe('TableParticipantComponent', () => {
  let component: TableParticipantComponent;
  let fixture: ComponentFixture<TableParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableParticipantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
