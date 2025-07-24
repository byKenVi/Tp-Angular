import { Component } from '@angular/core';
import { Service } from './models/booking.interface';
import { SERVICES_DATA } from './services-data';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [CommonModule, Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'wellness-booking';
 
  
}
