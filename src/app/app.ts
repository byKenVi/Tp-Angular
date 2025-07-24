
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
import { Header } from './header/header';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',

  imports: [HomeStep1, HomeStep2, HomeStep3, HomeStep4, CommonModule, ServiceCard, BookingPopup, CommonModule, Header, RouterOutlet],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'wellness-booking';
 
  
}
