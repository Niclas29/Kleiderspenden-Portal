import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
//Definierte Routen aus app.routes importieren
import routeConfig from './app/app.routes';


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(MatIconModule, MatButtonModule),
    //Erstellte Routen übergeben 
    provideRouter(routeConfig)
  ]
}).catch(err => console.error(err));