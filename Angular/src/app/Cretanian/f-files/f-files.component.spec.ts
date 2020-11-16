import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FFilesComponent } from './f-files.component';

describe('FFilesComponent', () => {
  let component: FFilesComponent;
  let fixture: ComponentFixture<FFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
