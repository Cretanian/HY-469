import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsButtonsComponent } from './options-buttons.component';

describe('OptionsButtonsComponent', () => {
  let component: OptionsButtonsComponent;
  let fixture: ComponentFixture<OptionsButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
