
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { BookingData, Service, CustomerInfo } from '../models/booking.interface';
import { SERVICES_DATA } from '../services-data';
import { ServicePopup } from '../service-popup/service-popup';
import { DateTimeSelector } from '../date-time-selector/date-time-selector';
import { CommonModule } from '@angular/common';
import { CustomerForm } from '../customer-form/customer-form';
import { BookingSummary } from '../booking-summary/booking-summary';

@Component({
  selector: 'app-booking-popup',
  imports: [CommonModule, ServicePopup, DateTimeSelector, CustomerForm, BookingSummary],
  templateUrl: './booking-popup.html',
  styleUrl: './booking-popup.css'
})
export class BookingPopup {
  @Input() isOpen: boolean = false;
  @Input() preSelectedService: Service | null = null;
  @Output() closePopup = new EventEmitter<void>();

  services = SERVICES_DATA;
  bookingData: BookingData = {
    service: null,
    selectedDate: null,
    selectedTime: null,
    customerInfo: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      comments: '',
      isNewCustomer: true
    },
    currentStep: 1
  };

  orderId: string = '';
  showCalendarMenu = false;

  ngOnInit() {
    if (this.preSelectedService) {
      this.selectService(this.preSelectedService);
    }
  }

  ngOnChanges() {
    if (this.preSelectedService && this.isOpen) {
      this.selectService(this.preSelectedService);
    }
  }

  selectService(service: Service) {
    this.bookingData.service = service;
    this.bookingData.currentStep = 2;
  }

  onDateTimeSelected(data: { date: Date, time: string }) {
    this.bookingData.selectedDate = data.date;
    this.bookingData.selectedTime = data.time;
    this.bookingData.currentStep = 3;
  }

  onCustomerInfoSubmitted(customerInfo: CustomerInfo) {
    this.bookingData.customerInfo = customerInfo;
    this.bookingData.currentStep = 4;
  }

  onSubmitOrder() {
    this.bookingData.currentStep = 5;
    this.orderId = this.generateOrderId();
  }

  generateOrderId(): string {
    return '#'+Math.random().toString(36).substr(2, 7).toUpperCase();
  }

  onBackStep() {
    if (this.bookingData.currentStep > 1) {
      this.bookingData.currentStep--;
    }
  }

  onClose() {
    this.bookingData = {
      service: null,
      selectedDate: null,
      selectedTime: null,
      customerInfo: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        comments: '',
        isNewCustomer: true
      },
      currentStep: 1
    };
    this.closePopup.emit();
  }

  getStepTitle(): string {
    switch (this.bookingData.currentStep) {
      case 1: return 'Available Services';
      case 2: return 'Date & Time Selection';
      case 3: return 'Customer Information';
      default: return '';
    }
  }

  onAddToCalendarClick() {
    this.showCalendarMenu = !this.showCalendarMenu;
  }

  onPrintReceipt() {
    const printContent = this.getReceiptHtml();
    const printWindow = window.open('', '', 'width=800,height=600');
    if (printWindow) {
      printWindow.document.write('<html><head><title>Print Receipt</title>');
      printWindow.document.write('<style>body{font-family:sans-serif;padding:2em;}h2{margin-top:0;}table{width:100%;border-collapse:collapse;}td,th{padding:8px;border-bottom:1px solid #eee;}th{text-align:left;} .section{margin-bottom:2em;} .total{font-weight:bold;font-size:1.2em;}</style>');
      printWindow.document.write('</head><body>');
      printWindow.document.write(printContent);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => printWindow.print(), 300);
    }
  }

  getReceiptHtml(): string {
    const d = this.bookingData;
    return `
      <h2>Appointment Confirmed</h2>
      <div class="section">
        <strong>Order:</strong> ${this.orderId}<br>
        <strong>Service:</strong> ${d.service?.title}<br>
        <strong>Date:</strong> ${d.selectedDate?.toLocaleDateString()}<br>
        <strong>Time:</strong> ${d.selectedTime}<br>
      </div>
      <div class="section">
        <strong>Customer:</strong> ${d.customerInfo.firstName} ${d.customerInfo.lastName}<br>
        <strong>Email:</strong> ${d.customerInfo.email}<br>
        <strong>Phone:</strong> ${d.customerInfo.phone}
      </div>
      <div class="section">
        <table>
          <tr><th>Cost Breakdown</th><th></th></tr>
          <tr><td>${d.service?.title}</td><td>$${d.service?.price?.toFixed(2)}</td></tr>
          <tr><td>Payments and Credits</td><td>$0.00</td></tr>
          <tr class="total"><td>Balance Due</td><td>$${d.service?.price?.toFixed(2)}</td></tr>
        </table>
      </div>
    `;
  }

  getGoogleCalendarUrl(): string {
    const d = this.bookingData;
    if (!d.selectedDate || !d.selectedTime || !d.service) return '#';
    const start = new Date(d.selectedDate);
    const [hour, minute] = d.selectedTime.split(':');
    start.setHours(Number(hour), Number(minute));
    const end = new Date(start.getTime() + 60 * 60 * 1000);
    const pad = (n: number) => n.toString().padStart(2, '0');
    const format = (date: Date) => `${date.getFullYear()}${pad(date.getMonth()+1)}${pad(date.getDate())}T${pad(date.getHours())}${pad(date.getMinutes())}00Z`;
    const details = encodeURIComponent(`Appointment for ${d.service.title}`);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(d.service.title)}&dates=${format(start)}/${format(end)}&details=${details}`;
  }

  getAppleCalendarUrl(): string {
    const d = this.bookingData;
    if (!d.selectedDate || !d.selectedTime || !d.service) return '#';
    const start = new Date(d.selectedDate);
    const [hour, minute] = d.selectedTime.split(':');
    start.setHours(Number(hour), Number(minute));
    const end = new Date(start.getTime() + 60 * 60 * 1000);
    const pad = (n: number) => n.toString().padStart(2, '0');
    const format = (date: Date) => `${date.getFullYear()}${pad(date.getMonth()+1)}${pad(date.getDate())}T${pad(date.getHours())}${pad(date.getMinutes())}00Z`;
    const ics = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:${d.service.title}\nDTSTART:${format(start)}\nDTEND:${format(end)}\nDESCRIPTION:Appointment for ${d.service.title}\nEND:VEVENT\nEND:VCALENDAR`;
    const blob = new Blob([ics.replace(/\n/g, '\r\n')], { type: 'text/calendar' });
    return URL.createObjectURL(blob);
  }

  getOutlookCalendarUrl(): string {
    return this.getGoogleCalendarUrl();
  }
}
