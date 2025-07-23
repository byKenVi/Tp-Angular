import { Component, Input } from '@angular/core';
import { BookingData } from '../models/booking.interface';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-booking-summary',
  imports: [CommonModule],
  templateUrl: './booking-summary.html',
  styleUrl: './booking-summary.css'
})
export class BookingSummary {
  @Input() bookingData!: BookingData;

  getFormattedDate(): string {
    if (!this.bookingData.selectedDate) return '';
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
                   'July', 'August', 'September', 'October', 'November', 'December'];
    const date = this.bookingData.selectedDate;
    return `${months[date.getMonth()]} ${date.getDate()}`;
  }

  getFormattedDateTime(): string {
    const date = this.getFormattedDate();
    const time = this.bookingData.selectedTime;
    return time ? `${date}, ${time}` : date;
  }
}
