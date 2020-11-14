import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTVgridComponent } from './table-tvgrid.component';

describe('TableTVgridComponent', () => {
  let component: TableTVgridComponent;
  let fixture: ComponentFixture<TableTVgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTVgridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTVgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
