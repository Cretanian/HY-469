import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvMasterComponent } from './tv-master.component';

describe('TvMasterComponent', () => {
  let component: TvMasterComponent;
  let fixture: ComponentFixture<TvMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
