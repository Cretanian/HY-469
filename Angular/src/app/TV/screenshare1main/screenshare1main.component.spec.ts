import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Screenshare1mainComponent } from './screenshare1main.component';

describe('Screenshare1mainComponent', () => {
  let component: Screenshare1mainComponent;
  let fixture: ComponentFixture<Screenshare1mainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Screenshare1mainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Screenshare1mainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
