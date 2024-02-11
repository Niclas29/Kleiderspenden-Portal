import { Component,Output, EventEmitter } from '@angular/core';
//Import um mit Formularen in Angular zu arbeiten 
import { FormControl, FormGroup, ReactiveFormsModule,Validators} from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form-kontaktdaten',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MatInputModule],
  templateUrl: './form-kontaktdaten.component.html',
  styleUrl: './form-kontaktdaten.component.scss'
})
export class FormKontaktdatenComponent {
      //Output Variable und Event Emitter erstellen um mit der Spendenklasse zu kommunizieren 
      //Drei Übergabevariablen definieren 
      @Output() callSpenden = new EventEmitter<{vorname:string, nachname:string, email:string}>();

      //Gruppe von Formularelementen für Kontaktdaten
      //Validierungsregeln festlegen 
      spendenKontaktFormular = new FormGroup({
      //Eingabe Vorname
      vorName : new FormControl('',[Validators.required]),
      //Eingabe Nachname
      nachName : new FormControl('',[Validators.required]),
      //Eingabe Email- Adresse
      emailAdresse : new FormControl('',[Validators.required,Validators.email]),
      })

    //Funktion wird von Button "Weiter" im Formular getriggert
    onFormSenden(){
      //Formular validieren..
      if(this.spendenKontaktFormular.valid){
        //Wenn Inhalt null oder undefined => ''
        var _vorname = this.spendenKontaktFormular.value.vorName ?? '';
        var _nachname = this.spendenKontaktFormular.value.nachName ?? '';
        var _email = this.spendenKontaktFormular.value.emailAdresse ?? '';
        //Variablen aus Formular zusammenpacken
        const datenpaket = {
          vorname : _vorname,
          nachname : _nachname,
          email : _email 
        }
        //Datenobjekt an Spendenkomponente zur Verwaltung übergeben 
        this.callSpenden.emit(datenpaket);
      }else{
        //Hilfe bei Anzeige von Validierungsfehlern
        //Berührt alle Felder und hilft bei Fehlerauswertung
        this.spendenKontaktFormular.markAllAsTouched();
      }
    }
  }

