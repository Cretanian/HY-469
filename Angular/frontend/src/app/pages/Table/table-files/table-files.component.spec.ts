import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFilesComponent } from './table-files.component';

describe('TableFilesComponent', () => {
  let component: TableFilesComponent;
  let fixture: ComponentFixture<TableFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
