import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvgridListComponent } from './tvgrid-list.component';

describe('TvgridListComponent', () => {
  let component: TvgridListComponent;
  let fixture: ComponentFixture<TvgridListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvgridListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvgridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
