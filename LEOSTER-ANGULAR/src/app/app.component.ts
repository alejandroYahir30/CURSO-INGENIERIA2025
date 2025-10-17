import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LnunezComponent } from "./lnunez/lnunez.component";

@Component({
  selector: 'app-root',
  imports: [LnunezComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LEOSTER-ANGULAR';
}
