import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPopup } from './booking-popup';

describe('BookingPopup', () => {
  let component: BookingPopup;
  let fixture: ComponentFixture<BookingPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingPopup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingPopup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
