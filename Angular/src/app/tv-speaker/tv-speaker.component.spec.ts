import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSpeakerComponent } from './tv-speaker.component';

describe('TvSpeakerComponent', () => {
  let component: TvSpeakerComponent;
  let fixture: ComponentFixture<TvSpeakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvSpeakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvSpeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
