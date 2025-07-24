import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
     ngAfterViewInit(): void {
    const burgerMenu = document.querySelector('.burger-menu');
    const liste = document.querySelector('.liste');

    if (burgerMenu && liste) {
    burgerMenu.addEventListener('click', () => {
        liste.classList.toggle('active');
    });
    }
}
}
    

