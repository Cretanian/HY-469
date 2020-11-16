import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMenuCarouselComponent } from './table-menu-carousel.component';

describe('TableMenuCarouselComponent', () => {
  let component: TableMenuCarouselComponent;
  let fixture: ComponentFixture<TableMenuCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMenuCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMenuCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
