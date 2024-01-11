import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
//Definierte Routen aus app.routes importieren
import routeConfig from './app/app.routes';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { provideAnimations} from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    //importProvidersFrom(),
    //Erstellte Routen übergeben 
    provideRouter(routeConfig)
  ]
}).catch(err => console.error(err));