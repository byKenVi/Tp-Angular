import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../models/booking.interface'; // Assuming you have a Service model defined

@Component({
  selector: 'app-service-popup',
  imports: [CommonModule],
  templateUrl: './service-popup.html',
  styleUrl: './service-popup.css'
})
export class ServicePopup {
    @Input() services: Service[] = [];
    @Output() serviceSelected = new EventEmitter<Service>();

  onServiceSelect(service: Service) {
    this.serviceSelected.emit(service);
  }

}
