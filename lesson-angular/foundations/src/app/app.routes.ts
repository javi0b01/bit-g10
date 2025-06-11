import { Routes } from '@angular/router';
import { Foundations } from './components/pages/foundations/foundations';
import { Home } from '../app/components/pages/home/home';
import { PageNotFound } from './components/pages/page-not-found/page-not-found';

export const routes: Routes = [
  {
    path: 'foundations',
    component: Foundations,
    title: 'Content | Foundations',
  },
  {
    path: 'home',
    component: Home,
    title: 'Home | Foundations',
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFound,
    title: 'Error 404 | Page Not Found',
  },
];
