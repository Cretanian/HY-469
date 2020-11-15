import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTeamMoreComponent } from './mobile-team-more.component';

describe('MobileTeamMoreComponent', () => {
  let component: MobileTeamMoreComponent;
  let fixture: ComponentFixture<MobileTeamMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileTeamMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileTeamMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
