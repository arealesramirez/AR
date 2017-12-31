import { ContactComponent } from './contact/contact.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReactComponent } from './react/react.component';
import { ProfileComponent } from './profile/profile.component';
//import { angularProfileCard } from '../../components/main-profile/index';
import { NoContentComponent } from './no-content/no-content.component';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'contact',      component: ContactComponent },
  // { path: 'posts', loadChildren: './posts#PostsModule' },
  // { path: 'profile', component: ProfileComponent },
  // { path: 'react', component: ReactComponent },
  // { path: '**',    component: NoContentComponent },
];
