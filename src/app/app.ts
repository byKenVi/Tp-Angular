import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeStep1 } from './home-step-1/home-step-1';
import { HomeStep2 } from './home-step-2/home-step-2';
import { HomeStep3 } from './home-step-3/home-step-3';
import { HomeStep4 } from './home-step-4/home-step-4';

@Component({
  selector: 'app-root',
  imports: [HomeStep1, HomeStep2, HomeStep3, HomeStep4],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Tp-Angular');
}
