import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FTeamsComponent } from './f-teams.component';

describe('FTeamsComponent', () => {
  let component: FTeamsComponent;
  let fixture: ComponentFixture<FTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FTeamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
