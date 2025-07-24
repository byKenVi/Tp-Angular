
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeStep1 } from './home-step-1/home-step-1';
import { HomeStep2 } from './home-step-2/home-step-2';
import { HomeStep3 } from './home-step-3/home-step-3';
import { HomeStep4 } from './home-step-4/home-step-4';
import { Component } from '@angular/core';
import { Service } from './models/booking.interface';
import { SERVICES_DATA } from './services-data';
import { CommonModule } from '@angular/common';
import { ServiceCard } from './service-card/service-card';
import { BookingPopup } from './booking-popup/booking-popup';


@Component({
  selector: 'app-root',
  imports: [HomeStep1, HomeStep2, HomeStep3, HomeStep4, CommonModule, ServiceCard, BookingPopup],

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
