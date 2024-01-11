import { Component, ChangeDetectorRef,AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
//Import um mit Formularen in Angular zu arbeiten 
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select'; 
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card'; 
import { trigger, state, style, transition, animate } from '@angular/animations'; // Importieren Sie die Animationen

@Component({
  selector: 'app-spenden',
  standalone: true,
  imports: [ReactiveFormsModule,MatSelectModule,MatInputModule,
                  MatCardModule,CommonModule],
  templateUrl: './spenden.component.html',
  styleUrl: './spenden.component.scss',
  animations: [
    // Definieren Sie die Animation
    trigger('fadeIn', [
      state('show', style({
        opacity : 1,
        transform : 'scale(1.05)'
      })),
      state('hide', style({
        opacity :0 ,
        transform : 'scale(1)'
      })),
      //show liegt vor und wir wollen zu hide
      transition('show => hide', [
        animate('500ms')
      ])
    ])
  ]
})

export class SpendenComponent {
  public eventKontaktForm!: string;
  public eventKleidungsArt!: string;
  constructor() { 
    this.eventKontaktForm = 'show';
    this.eventKleidungsArt = 'hide';
  }

  //Gruppe von Formularelementen für Kontaktdaten
  spendenKontaktFormular = new FormGroup({
  //Eingabe Vorname
  vorName : new FormControl(''),
  //Eingabe Nachname
  nachName : new FormControl(''),
  //Eingabe Email- Adresse
  emailAdresse : new FormControl(''),
  //Dropdown Kleidungsart
  })

  //Gruppe für Kleidungsart
  spendenArtDerKleidungFormular = new FormGroup({
    kleidungsArt : new FormControl('')
  })


  //Funktion wird von Button Senden im Formular getriggert
  onFormSenden(){
      //Wenn Inhalt null oder undefined => ''
      var vorname = this.spendenKontaktFormular.value.vorName ?? '';
      var nachname = this.spendenKontaktFormular.value.nachName ?? '';
      var email = this.spendenKontaktFormular.value.emailAdresse ?? '';
      console.log(vorname);
      console.log(nachname);
      console.log(email);
      if(this.spendenKontaktFormular.valid && vorname != '' && nachname != '' && email != ''){
        console.log('valid')
        this.eventKontaktForm = 'hide';
        this.eventKleidungsArt = 'show';
      }
    }

  
}
