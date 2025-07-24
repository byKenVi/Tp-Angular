import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { AboutPage } from './about-page/about-page';
import { ContactPage } from './contact-page/contact-page';
import { ServicePage } from './service-page/service-page';

export const routes: Routes = [
    {path:"",component:HomePage},
    {path:"about",component:AboutPage},
    {path:"contact",component:ContactPage},
    {path:"services",component:ServicePage}
];
