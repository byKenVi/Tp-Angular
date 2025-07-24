import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CalendarDate {
  day: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
}

@Component({
  selector: 'app-home-step-2',
  imports: [CommonModule],
  templateUrl: './home-step-2.html',
  styleUrl: './home-step-2.css'
})
export class HomeStep2 implements OnInit {
  
  months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  currentDate: Date = new Date();
  displayMonth: number = this.currentDate.getMonth();
  displayYear: number = this.currentDate.getFullYear();
  calendarDates: CalendarDate[] = [];
  currentMonthYear: string = '';
  selectedDate: CalendarDate | null = null;

  ngOnInit(): void {
    this.renderCalendar();
  }

  renderCalendar(): void {
    console.log('Rendering calendar for:', this.displayMonth, this.displayYear);
    
    // Premier jour du mois (0 = Dimanche, 1 = Lundi, etc.)
    const start = new Date(this.displayYear, this.displayMonth, 1).getDay();
    
    // Dernier jour du mois
    const endDate = new Date(this.displayYear, this.displayMonth + 1, 0).getDate();
    
    // Dernier jour de la semaine du mois
    const end = new Date(this.displayYear, this.displayMonth, endDate).getDay();
    
    // Dernier jour du mois précédent
    const endDatePrev = new Date(this.displayYear, this.displayMonth, 0).getDate();

    this.calendarDates = [];

    // Ajouter les jours du mois précédent
    for (let i = start; i > 0; i--) {
      this.calendarDates.push({
        day: endDatePrev - i + 1,
        isCurrentMonth: false,
        isToday: false,
        isSelected: false
      });
    }

    // Ajouter les jours du mois actuel
    for (let i = 1; i <= endDate; i++) {
      const isToday = i === this.currentDate.getDate() &&
                     this.displayMonth === this.currentDate.getMonth() &&
                     this.displayYear === this.currentDate.getFullYear();

      this.calendarDates.push({
        day: i,
        isCurrentMonth: true,
        isToday: isToday,
        isSelected: false
      });
    }

    // Ajouter les jours du mois suivant
    for (let i = end; i < 6; i++) {
      this.calendarDates.push({
        day: i - end + 1,
        isCurrentMonth: false,
        isToday: false,
        isSelected: false
      });
    }

    // Mettre à jour le header
    this.currentMonthYear = `${this.months[this.displayMonth]} ${this.displayYear}`;
    console.log('Calendar rendered:', this.currentMonthYear, 'Dates count:', this.calendarDates.length);
  }

  previousMonth(): void {
    if (this.displayMonth === 0) {
      this.displayYear--;
      this.displayMonth = 11;
    } else {
      this.displayMonth--;
    }
    this.renderCalendar();
  }

  nextMonth(): void {
    console.log('Next month clicked - Before:', this.displayMonth, this.displayYear);
    
    if (this.displayMonth === 11) {
      this.displayYear++;
      this.displayMonth = 0;
    } else {
      this.displayMonth++;
    }
    
    console.log('Next month clicked - After:', this.displayMonth, this.displayYear);
    this.renderCalendar();
  }

  selectDate(date: CalendarDate): void {
    if (!date.isCurrentMonth) return;

    // Désélectionner la date précédente
    if (this.selectedDate) {
      this.selectedDate.isSelected = false;
    }

    // Sélectionner la nouvelle date
    date.isSelected = true;
    this.selectedDate = date;

    // Émettre un événement ou traiter la sélection
    console.log(`Date sélectionnée: ${date.day}/${this.displayMonth + 1}/${this.displayYear}`);
  }

  // Méthode utilitaire pour obtenir la date complète sélectionnée
  getSelectedDate(): Date | null {
    if (!this.selectedDate) return null;
    return new Date(this.displayYear, this.displayMonth, this.selectedDate.day);
  }
}