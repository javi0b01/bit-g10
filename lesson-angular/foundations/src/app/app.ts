import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/shared/header/header';
import { Navigation } from './components/shared/navigation/navigation';
import { Footer } from './components/shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Navigation, Footer],
  template: `<app-header /><app-navigation /><router-outlet /><app-footer />`,
  styles: ``,
})
export class App {}
