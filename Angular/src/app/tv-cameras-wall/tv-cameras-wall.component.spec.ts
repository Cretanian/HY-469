import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvCamerasWallComponent } from './tv-cameras-wall.component';

describe('TvCamerasWallComponent', () => {
  let component: TvCamerasWallComponent;
  let fixture: ComponentFixture<TvCamerasWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvCamerasWallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvCamerasWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
