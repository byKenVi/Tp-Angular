 
import { Component, Input, Output, EventEmitter, OnInit  } from '@angular/core';
import { Service, AvailableDate } from '../models/booking.interface';
import { TIME_SLOTS } from '../services-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-date-time-selector',
  imports: [CommonModule],
  templateUrl: './date-time-selector.html',
  styleUrl: './date-time-selector.css'
})
export class DateTimeSelector {
  @Input() selectedService: Service | null = null;
  @Output() dateTimeSelected = new EventEmitter<{ date: Date, time: string }>();
  @Output() backClicked = new EventEmitter<void>();

  currentMonth = new Date();
  selectedDate: Date | null = null;
  selectedTime: string | null = null;
  availableDates: AvailableDate[] = [];
  timeSlots = TIME_SLOTS;



  ngOnInit() {
    this.generateAvailableDates();
  }

  generateAvailableDates() {
    const today = new Date();
    const endDate = new Date(today.getFullYear(), today.getMonth() + 3, 0); // 3 mois à partir d'aujourd'hui
    
    this.availableDates = [];
    
    const currentDate = new Date(today);
    while (currentDate <= endDate) {
      // Rendre certaines dates disponibles (exclure les weekends pour cet exemple)
      const dayOfWeek = currentDate.getDay();
      const isAvailable = dayOfWeek !== 0 && dayOfWeek !== 6; // Pas dimanche (0) ni samedi (6)
      
      this.availableDates.push({
        date: new Date(currentDate),
        available: isAvailable
      });
      
      currentDate.setDate(currentDate.getDate() + 1);
    }
  }

  getCalendarDays(): (Date | null)[] {
    const firstDay = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), 1);
    const lastDay = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 0);
    
    // Calculer le premier jour à afficher (peut être du mois précédent)
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days: (Date | null)[] = [];
    const currentDate = new Date(startDate);

    // Générer 42 jours (6 semaines)
    for (let i = 0; i < 42; i++) {
      if (currentDate.getMonth() === this.currentMonth.getMonth()) {
        // Seulement les dates du mois courant
        days.push(new Date(currentDate));
      } else {
        // Dates des autres mois = null
        days.push(null);
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return days;
  }

  isDateAvailable(date: Date): boolean {
    if (!date) return false;
    
    // Vérifier si la date est dans le futur ou aujourd'hui
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);
    
    if (date < today) return false;
    
    // Vérifier dans les dates disponibles
    return this.availableDates.some(d => {
      const availableDate = new Date(d.date);
      availableDate.setHours(0, 0, 0, 0);
      return availableDate.getTime() === date.getTime() && d.available;
    });
  }

  isDateSelected(date: Date): boolean {
    if (!date || !this.selectedDate) return false;
    
    const selectedDateCopy = new Date(this.selectedDate);
    const dateCopy = new Date(date);
    
    selectedDateCopy.setHours(0, 0, 0, 0);
    dateCopy.setHours(0, 0, 0, 0);
    
    return selectedDateCopy.getTime() === dateCopy.getTime();
  }

  selectDate(date: Date) {
    console.log('Date clicked:', date); // Pour débugger
    console.log('Is available:', this.isDateAvailable(date)); // Pour débugger
    
    if (this.isDateAvailable(date)) {
      this.selectedDate = new Date(date);
      this.selectedTime = null; // Reset time selection
      console.log('Date selected:', this.selectedDate); // Pour débugger
    }
  }

  selectTime(time: string) {
    this.selectedTime = time;
  }

  getSelectedDateFormatted(): string {
    if (!this.selectedDate) return '';
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
                   'July', 'August', 'September', 'October', 'November', 'December'];
    return `${months[this.selectedDate.getMonth()]} ${this.selectedDate.getDate()}`;
  }

  canProceed(): boolean {
    return this.selectedDate !== null && this.selectedTime !== null;
  }

  onNext() {
    if (this.canProceed() && this.selectedDate && this.selectedTime) {
      this.dateTimeSelected.emit({
        date: this.selectedDate,
        time: this.selectedTime
      });
    }
  }

  onBack() {
    this.backClicked.emit();
  }

  previousMonth() {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() - 1, 1);
  }

  nextMonth() {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 1);
  }

  getMonthYear(): string {
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
                   'July', 'August', 'September', 'October', 'November', 'December'];
    return `${months[this.currentMonth.getMonth()]} ${this.currentMonth.getFullYear()}`;
  }
  getTimeSlotRows(): string[][] {
    const rows: string[][] = [];
    for (let i = 0; i < this.timeSlots.length; i += 4) {
      rows.push(this.timeSlots.slice(i, i + 4));
    }
    return rows;
  }
}