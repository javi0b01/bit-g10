import { Routes } from '@angular/router';
import { Challenges } from './components/pages/challenges/challenges';
import { Home } from './components/pages/home/home';
import { PageNotFound } from './components/pages/page-not-found/page-not-found';

export const routes: Routes = [
  {
    path: 'challenges',
    component: Challenges,
    title: 'Challenges',
  },
  { path: 'home', component: Home, title: 'Home | Challenges' },
  {
    path: '**',
    component: PageNotFound,
    title: 'Error 404 | Page Not Found',
  },
];
