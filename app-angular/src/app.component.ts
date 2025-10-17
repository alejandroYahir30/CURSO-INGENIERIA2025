import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="card">
      <h1>Yahir Alejandro Rodriguez Arenas</h1>
      <p><strong>Carrera:</strong> Entornos Virtuales y Negocios Digitales</p>
      <p><strong>Pasatiempo favorito:</strong> Escuchar música</p>
    </div>
  `,
  styles: [`
    .card {
      background-color: #ffffff;
      padding: 30px 40px;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      text-align: center;
      max-width: 400px;
      width: 90%;
    }

    h1 {
      color: #2c3e50;
      margin-bottom: 15px;
      font-size: 24px;
    }

    p {
      color: #34495e;
      margin: 8px 0;
      font-size: 16px;
    }
  `]
})
export class AppComponent {}
