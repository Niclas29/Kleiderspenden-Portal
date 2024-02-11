import { Component, Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'; 
import { SpendenDatenService } from '../spenden-daten.service';

@Component({
  selector: 'app-form-krisengebiet',
  standalone: true,
  imports: [CommonModule,MatSnackBarModule],
  templateUrl: './form-krisengebiet.component.html',
  styleUrl: './form-krisengebiet.component.scss'
})
export class FormKrisengebietComponent {
  public ausgewaehltes_krisengebiet : string | null = null;

  @Output() callSpenden = new EventEmitter<{krisengebiet : string}>(); 

  constructor(private snackBar : MatSnackBar,private spendenDatenService: SpendenDatenService) {}

  krisengebiete = this.spendenDatenService.getKrisengebiete();

  onAuswahlKrisengebiet(gebiet:string){
    if (this.ausgewaehltes_krisengebiet === gebiet) {
      this.ausgewaehltes_krisengebiet = null;
    } else {
      this.ausgewaehltes_krisengebiet = gebiet;
    }
  }

  onFormSenden(){
    if(typeof this.ausgewaehltes_krisengebiet == 'string'){
      const datenpaket = {
        krisengebiet : this.ausgewaehltes_krisengebiet!
      }
      this.callSpenden.emit(datenpaket);
    }else{
      this.snackBar.open('Bitte wähle ein Krisengebiet aus, in welches du deine Spende schicken willst!', 'Schließen',{duration:4000});
    }
  }
}
