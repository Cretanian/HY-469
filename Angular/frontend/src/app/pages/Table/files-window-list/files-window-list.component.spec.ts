import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesWindowListComponent } from './files-window-list.component';

describe('FilesWindowListComponent', () => {
  let component: FilesWindowListComponent;
  let fixture: ComponentFixture<FilesWindowListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesWindowListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesWindowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
