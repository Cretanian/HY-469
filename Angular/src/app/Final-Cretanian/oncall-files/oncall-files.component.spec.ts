import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OncallFilesComponent } from './oncall-files.component';

describe('OncallFilesComponent', () => {
  let component: OncallFilesComponent;
  let fixture: ComponentFixture<OncallFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OncallFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OncallFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
