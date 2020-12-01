import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerTeamsComponent } from './explorer-teams.component';

describe('ExplorerTeamsComponent', () => {
  let component: ExplorerTeamsComponent;
  let fixture: ComponentFixture<ExplorerTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorerTeamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorerTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
