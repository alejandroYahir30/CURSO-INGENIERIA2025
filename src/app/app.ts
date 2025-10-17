import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { Home } from './pages/home/home';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  imports: [NavbarComponent, Home, Footer],
})
export class App {}
