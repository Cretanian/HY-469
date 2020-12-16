import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvMessageComponent } from './tv-message.component';

describe('TvMessageComponent', () => {
  let component: TvMessageComponent;
  let fixture: ComponentFixture<TvMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
