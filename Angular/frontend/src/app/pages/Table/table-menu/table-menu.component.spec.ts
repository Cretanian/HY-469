import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMenuComponent } from './table-menu.component';

describe('TableMenuComponent', () => {
  let component: TableMenuComponent;
  let fixture: ComponentFixture<TableMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
