import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerTeamsFilesComponent } from './explorer-teams-files.component';

describe('ExplorerTeamsFilesComponent', () => {
  let component: ExplorerTeamsFilesComponent;
  let fixture: ComponentFixture<ExplorerTeamsFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorerTeamsFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorerTeamsFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
