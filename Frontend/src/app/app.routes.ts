import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';
import { dashboardComponent } from './dashboard/dashboard';
import { AdminProductosComponent } from './admin-productos/admin-productos';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: dashboardComponent },
  { path: 'admin-productos', component: AdminProductosComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];