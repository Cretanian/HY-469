import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSectionListComponent } from './contact-section-list.component';

describe('ContactSectionListComponent', () => {
  let component: ContactSectionListComponent;
  let fixture: ComponentFixture<ContactSectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactSectionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
