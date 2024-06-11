import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/layouts/page-not-found/page-not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', title: 'Login', component: LoginComponent },
  {
    path: 'dashboard',
    title: 'Dashboard',
    component: DashboardComponent,
    children: [{ path: '', component: HomeComponent }],
  },
  { path: '**', component: PageNotFoundComponent },
];
