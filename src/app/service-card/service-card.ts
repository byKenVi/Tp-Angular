import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../models/booking.interface'; // Assuming you have a Service model defined

@Component({
  selector: 'app-service-card',
  imports: [CommonModule],
  templateUrl: './service-card.html',
  styleUrl: './service-card.css'
})
export class ServiceCard {
  @Input() service!: Service;
  @Input() isReversed: boolean = false;
  @Output() bookAppointment = new EventEmitter<Service>();

  onBookAppointment() {
    this.bookAppointment.emit(this.service);
}
}
