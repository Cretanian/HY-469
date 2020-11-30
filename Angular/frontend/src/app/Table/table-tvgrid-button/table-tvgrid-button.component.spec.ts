import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTvgridButtonComponent } from './table-tvgrid-button.component';

describe('TableTvgridButtonComponent', () => {
  let component: TableTvgridButtonComponent;
  let fixture: ComponentFixture<TableTvgridButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTvgridButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTvgridButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
