import { Component, Output, EventEmitter } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio'; 
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { MatInputModule } from '@angular/material/input';
import { GeschaeftsstellenDatenService } from '../geschaeftsstellen-daten.service'; 
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar'; 

@Component({
  selector: 'app-form-versand',
  standalone: true,
  imports: [MatSnackBarModule,MatRadioModule,ReactiveFormsModule,MatInputModule,CommonModule],
  templateUrl: './form-versand.component.html',
  styleUrl: './form-versand.component.scss'
})

export class FormVersandComponent {
  //Output Variable und Event Emitter erstellen um mit der Spendenklasse zu kommunizieren 
  @Output() callSpenden = new EventEmitter<{art:string, strasse:string,hausnummer:string,plz:string,ort:string}>(); 
  gewählterVersand : string = 'übergabe';

  option1 = 'übergabe';
  option2 = 'abholung';

  //Form für Radiobuttons Vorauswahl Versandmöglichkeiten
  spendenVersand =  new FormGroup({
    //Radiobuttons Auswahl
    versandAuswahl : new FormControl('übergabe',[Validators.required]),
  });

  //Form falls Abholung angewählt wurde
  spendenVersandAbholung = new FormGroup({
    strasse : new FormControl('', [Validators.required]),
    hausNr : new FormControl('', [Validators.required]),
    plz : new FormControl('', [Validators.required]),
    ort : new FormControl('', [Validators.required])
  })

  constructor(private geschaeftsStellenDatenService: GeschaeftsstellenDatenService,private snackBar : MatSnackBar) {
    this.onVersandAuswahlChange('übergabe');
    this.spendenVersand.controls['versandAuswahl'].valueChanges.subscribe((value) => {
      this.onVersandAuswahlChange(value ?? '');
    });
  }

  //Wird die Option Übergabe gewählt ist eine Adresseingabe nicht erforderlich
  onVersandAuswahlChange(auswahl : string){
    this.gewählterVersand = auswahl;
    if(auswahl == 'übergabe'){
      this.spendenVersandAbholung.controls.strasse.disable();
      this.spendenVersandAbholung.controls.hausNr.disable();
      this.spendenVersandAbholung.controls.plz.disable();
      this.spendenVersandAbholung.controls.ort.disable();
    }else{
      this.spendenVersandAbholung.controls.strasse.enable();
      this.spendenVersandAbholung.controls.hausNr.enable();
      this.spendenVersandAbholung.controls.plz.enable();
      this.spendenVersandAbholung.controls.ort.enable();
    }
  }

  onFormSenden(){
    //Wenn Übergabe angewählt ist, muss nichts weiter überprüft werden
    if(this.gewählterVersand == 'übergabe'){

      const datenpaket = {
        art : 'Übergabe',
        strasse : 'null',
        hausnummer : 'null',
        plz : 'null',
        ort : 'null'
      }

      this.callSpenden.emit(datenpaket);

    }else{
      //Anderenfalls muss geprüft werden, ob Geschäftsstelle in der Nähe ist
      //Dazu zuerst das Formular validieren 
      if(this.spendenVersandAbholung.valid){
        let check = this.geschaeftsStellenDatenService.checkGeschaeftInNähe(this.spendenVersandAbholung.value.plz ?? '');

        if(check){
          //PLZ wurde abgeglichen und Abholung durch Sammelfahrzeug ist möglich
          const datenpaket = {
            art : 'Abholung',
            strasse : this.spendenVersandAbholung.value.strasse ?? '',
            hausnummer : this.spendenVersandAbholung.value.hausNr ?? '',
            plz : this.spendenVersandAbholung.value.plz ?? '',
            ort : this.spendenVersandAbholung.value.ort ?? ''
          }
          this.callSpenden.emit(datenpaket);
        }else{
          //Es befindet sich keine Abholstation in der Nähe..
          this.snackBar.open("Leider befindet sich keine Geschäftsstelle in der Nähe zu der angegebenen Adresse! \
                              Bitte wählen Sie einen anderen Abholort oder bringen Sie die Kleidung persönlich vorbei. Unsere Geschäftstellen \
                              finden Sie unter dem Reiter 'Geschäftsstellen'"
                              , 'Schließen',{duration:8000});
        }
      }else{
        this.spendenVersandAbholung.markAllAsTouched();
      }
    }
  }

}
