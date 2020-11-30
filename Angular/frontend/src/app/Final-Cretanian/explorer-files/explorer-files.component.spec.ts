import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerFilesComponent } from './explorer-files.component';

describe('ExplorerFilesComponent', () => {
  let component: ExplorerFilesComponent;
  let fixture: ComponentFixture<ExplorerFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorerFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorerFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
