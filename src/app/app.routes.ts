import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'blogs', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
];
