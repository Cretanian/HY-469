import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericVolumeEditorComponent } from './generic-volume-editor.component';

describe('GenericVolumeEditorComponent', () => {
  let component: GenericVolumeEditorComponent;
  let fixture: ComponentFixture<GenericVolumeEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericVolumeEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericVolumeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
