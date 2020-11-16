import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManyUsersComponent } from './many-users.component';

describe('ManyUsersComponent', () => {
  let component: ManyUsersComponent;
  let fixture: ComponentFixture<ManyUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManyUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManyUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
