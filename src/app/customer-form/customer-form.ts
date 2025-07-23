import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 

import { BookingData, CustomerInfo } from '../models/booking.interface';
@Component({
  selector: 'app-customer-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './customer-form.html',
  styleUrl: './customer-form.css'
})
export class CustomerForm {
 @Input() bookingData!: BookingData;
  @Output() customerInfoSubmitted = new EventEmitter<CustomerInfo>();
  @Output() backClicked = new EventEmitter<void>();

  customerForm: FormGroup;
  isNewCustomer = true;

  constructor(private fb: FormBuilder) {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?1?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)]],
      email: ['', [Validators.required, Validators.email]],
      comments: ['']
    });
  }

  toggleCustomerType(isNew: boolean) {
    this.isNewCustomer = isNew;
  }

  onSubmit() {
    if (this.customerForm.valid) {
      const customerInfo: CustomerInfo = {
        ...this.customerForm.value,
        isNewCustomer: this.isNewCustomer
      };
      this.customerInfoSubmitted.emit(customerInfo);
    } else {
      this.markFormGroupTouched();
    }
  }

  onBack() {
    this.backClicked.emit();
  }

  private markFormGroupTouched() {
    Object.keys(this.customerForm.controls).forEach(key => {
      this.customerForm.get(key)?.markAsTouched();
    });
  }

  getFieldError(fieldName: string): string {
    const field = this.customerForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) return `${fieldName} is required`;
      if (field.errors['email']) return 'Please enter a valid email';
      if (field.errors['pattern']) return 'Please enter a valid phone number';
      if (field.errors['minlength']) return `${fieldName} must be at least ${field.errors['minlength'].requiredLength} characters`;
    }
    return '';
  }

  hasFieldError(fieldName: string): boolean {
    const field = this.customerForm.get(fieldName);
    return !!(field?.errors && field.touched);
  }
}
