import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsButtonComponent } from './teams-button.component';

describe('TeamsButtonComponent', () => {
  let component: TeamsButtonComponent;
  let fixture: ComponentFixture<TeamsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
