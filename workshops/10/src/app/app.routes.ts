import { Routes } from '@angular/router';
import { activateGuard } from './guards/activate-guard';
import { Home } from './components/pages/home/home';
import { Dashboard } from './components/pages/dashboard/dashboard';
import { SignUp } from './components/pages/sign-up/sign-up';
import { SignIn } from './components/pages/sign-in/sign-in';
import { PageNotFound } from './components/pages/page-not-found/page-not-found';

export const routes: Routes = [
  { path: 'home', component: Home, title: 'Home | SPA' },
  {
    path: 'dashboard',
    component: Dashboard,
    title: 'Dashboard | SPA',
    canActivate: [activateGuard],
  },
  { path: 'sign-up', component: SignUp, title: 'Sign Up | SPA' },
  { path: 'sign-in', component: SignIn, title: 'Sign In | SPA' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFound, title: 'Error 404 | SPA' },
];
