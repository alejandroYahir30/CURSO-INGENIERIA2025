import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// Si quieres animaciones en el futuro, puedes importar:
// import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
