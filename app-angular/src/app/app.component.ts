import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { XdelabraComponent } from './xdelabra/xdelabra.component';

@Component({
  selector: 'app-root',
  imports: [XdelabraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-angular';
}
