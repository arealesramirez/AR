import { ContactComponent } from './contact/contact.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
//import { angularProfileCard } from '../../components/main-profile/index';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'contact',      component: ContactComponent },
];
