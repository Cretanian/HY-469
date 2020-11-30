import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerSmarthomeComponent } from './explorer-smarthome.component';

describe('ExplorerSmarthomeComponent', () => {
  let component: ExplorerSmarthomeComponent;
  let fixture: ComponentFixture<ExplorerSmarthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorerSmarthomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorerSmarthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
