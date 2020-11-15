import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericHeaderItemComponent } from './generic-header-item.component';

describe('GenericHeaderItemComponent', () => {
  let component: GenericHeaderItemComponent;
  let fixture: ComponentFixture<GenericHeaderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericHeaderItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericHeaderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
