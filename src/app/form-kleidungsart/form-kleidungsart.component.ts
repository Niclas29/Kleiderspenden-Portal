import { Component,Output,EventEmitter} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { MatSelectModule } from '@angular/material/select'; 
import { MatInputModule } from '@angular/material/input';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar'; 

@Component({
  selector: 'app-form-kleidungsart',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,MatSelectModule,MatInputModule,MatSnackBarModule],
  templateUrl: './form-kleidungsart.component.html',
  styleUrl: './form-kleidungsart.component.scss'
})
export class FormKleidungsartComponent {
  @Output() callSpenden = new EventEmitter<[string,number][]>();

  public hinzugefuegteKleidungsstuecke : [string,number][] = [];

  //MatSnackBar injezieren. Danach kann darauf zugegriffen werden, ohne es 
  //manuell zu instanzieren 
  constructor(private snackBar : MatSnackBar) {}

  data = {
    kleidungsart : '',
    anzahl : ''
  }

  spendenArtDerKleidungFormular =  new FormGroup({
    //Dropdown Kleidungsart
    kleidungsArt : new FormControl('',[Validators.required]),
    //Anzahl
    anzahl : new FormControl(0,[Validators.required,Validators.min(1),Validators.max(999)])
  });

  //Button Kleidung hinzufügen
  onKleidungHinzufuegen(){
    if(this.spendenArtDerKleidungFormular.valid){
      var kleidungsart = this.spendenArtDerKleidungFormular.value.kleidungsArt ?? '';
      var anzahl= this.spendenArtDerKleidungFormular.value.anzahl ?? 0;
      this.hinzugefuegteKleidungsstuecke.push([kleidungsart,anzahl]);
    }
  }

  entferneKleidungsstueck(item: [string, number]) {
    const index = this.hinzugefuegteKleidungsstuecke.indexOf(item);
    if (index !== -1) {
      this.hinzugefuegteKleidungsstuecke.splice(index, 1);
    }
  }

  onKleidungAuswahlFertig(){
    console.log(this.hinzugefuegteKleidungsstuecke);
    if(this.hinzugefuegteKleidungsstuecke.length >= 1){
      this.callSpenden.emit(this.hinzugefuegteKleidungsstuecke);
    }else{
      this.snackBar.open('Es muss mindestens ein Kleidungsstück hinzugefügt werden!', 'Schließen',{duration:3000});
    }
  }
}
