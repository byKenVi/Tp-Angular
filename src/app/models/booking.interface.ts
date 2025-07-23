export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  features: string[];
  startPrice: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface BookingStep {
  step: number;
  title: string;
  completed: boolean;
}

export interface CustomerInfo {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  comments: string;
  isNewCustomer: boolean;
}

export interface BookingData {
  service: Service | null;
  selectedDate: Date | null;
  selectedTime: string | null;
  customerInfo: CustomerInfo;
  currentStep: number;
}

export interface AvailableDate {
  date: Date;
  available: boolean;
}