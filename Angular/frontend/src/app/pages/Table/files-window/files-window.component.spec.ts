import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesWindowComponent } from './files-window.component';

describe('FilesWindowComponent', () => {
  let component: FilesWindowComponent;
  let fixture: ComponentFixture<FilesWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
