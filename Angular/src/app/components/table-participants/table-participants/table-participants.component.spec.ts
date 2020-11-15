import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableParticipantsComponent } from './table-participants.component';

describe('TableParticipantsComponent', () => {
  let component: TableParticipantsComponent;
  let fixture: ComponentFixture<TableParticipantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableParticipantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
