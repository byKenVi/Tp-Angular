import { Component } from '@angular/core';
import { Service } from './models/booking.interface';
import { SERVICES_DATA } from './services-data';
import { CommonModule } from '@angular/common';
import { ServiceCard } from './service-card/service-card';
import { BookingPopup } from './booking-popup/booking-popup';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ServiceCard, BookingPopup],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'wellness-booking';
  services = SERVICES_DATA;
  isBookingPopupOpen = false;
  selectedService: Service | null = null;

  onBookAppointment(service: Service) {
    this.selectedService = service;
    this.isBookingPopupOpen = true;
  }

  onCloseBookingPopup() {
    this.isBookingPopupOpen = false;
    this.selectedService = null;
  }
}
