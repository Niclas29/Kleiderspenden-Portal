import { Component, ChangeDetectorRef,AfterViewInit,ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common'; 
//Import um mit Formularen in Angular zu arbeiten 
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select'; 
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card'; 
import { trigger, state, style, transition, animate } from '@angular/animations'; // Importieren Sie die Animationen
import { FormKontaktdatenComponent } from '../form-kontaktdaten/form-kontaktdaten.component';
import { FormKleidungsartComponent } from '../form-kleidungsart/form-kleidungsart.component';
import { FormVersandComponent } from '../form-versand/form-versand.component';
import { FormKrisengebietComponent } from '../form-krisengebiet/form-krisengebiet.component';
import { SpendenBestaetigungComponent } from '../spenden-bestaetigung/spenden-bestaetigung.component';
import { SpendenDatenService } from '../spenden-daten.service';

@Component({
  selector: 'app-spenden',
  standalone: true,
  imports: [ReactiveFormsModule,MatSelectModule,MatInputModule,
                  MatCardModule,CommonModule,FormKontaktdatenComponent,FormKleidungsartComponent, 
                  FormVersandComponent,FormKrisengebietComponent,SpendenBestaetigungComponent],
  templateUrl: './spenden.component.html',
  styleUrl: './spenden.component.scss',
  animations: [
    // Trigger für ausblenden des Kontaktdatenforms
    trigger('fadeOut', [
      state('show', style({
        opacity : 1,
        transform : 'scale(1.05)'
      })),
      state('hide', style({
        opacity :0 ,
        transform : 'scale(1)'
      })),
      //Wechsel von show zu hide
      transition('show => hide', [
        animate('500ms')
      ]),
      transition('hide => show', [
        animate('700ms')
      ])
    ]),
  ]
})

export class SpendenComponent {
  //Animationsstatus für Auswahl Kleiderart
  public eventKleidungsArt!: string;
  //Animationsstatus für Eingabe Kontaktdaten
  public eventKontaktdaten!: string;
  //Animationsstatus für Eingabe Abholung / Abgabe
  public eventVersand!: string;
  //Animationsstatus für Auswahl Krisengebiet
  public eventKrisengebiet!: string;
  //Animationsstatus für Bestätigung am Ende
  public eventBestaetigung!: string;
  //Status um Element nach der Animation aus DOM zu entfernen, um Platz für nächstes Form zu machen 
  //Zuerst soll Kontaktdaten Form zu sehen sein 
  public kontaktFormisVisible = true;
  //Kleidungsart auswahl ausblenden 
  public kleidungsartFormisVisible = false;
  //Versand auswahl ausblenden
  public versandFormVisible = false;
  //Krisengebiet Auswahl ausblenden
  public krisengebietFormVisible = false;
  //Bestätigung ausblenden 
  public spendenBestaetigungVisible = false;

  constructor(private spendenDatenService: SpendenDatenService) { 
    //Init Animationsvariablen
    this.eventKontaktdaten = 'show';
    this.eventKleidungsArt = 'hide';
    this.eventVersand = 'hide';
    this.eventBestaetigung = 'hide';
  }

  //Formulare werden nach korrekter Benutzereingabe und Click auf "Weiter" durchgegangen. 
  // 1) Kontaktdaten erfassen 
  // 2) Versand / Abholung wählen 
  // 3) Kleidungsstücke auswählen 
  // 4) Krisengebiet auswählen 
  // Anschließend erfolgt eine Zusammenfassung / Bestätigung 

  //Wird von Kind FormKontaktdaten getriggert
  setKontaktdaten(data : {vorname:string, nachname:string, email:string}){
    this.spendenDatenService.setKontaktdaten(data);
    this.changeToVersand()
  }

  //Wird von Kind FormVersand getriggert
  setVersandart(data : {art:string, strasse:string, hausnummer:string, plz:string, ort:string}){
    this.spendenDatenService.setVersandart(data);
    this.changeToKleidungsart();
  }

  //Wird von Kind FormKleidungsart getriggert
  setKleidungsStuecke(data : [string,number][]){
    this.spendenDatenService.setKleidungsart({kleidungsstuecke : data});
    this.changeToKrisengebiet();
  }

  //Wird von Kind FormKrisengebiet getriggert
  setKrisengebiet(data : {krisengebiet : string}){
    this.spendenDatenService.setKrisengebiet(data);
    this.changeToBestaetigung();
  }

  //Kontaktdaten wurden registriert -> wechsel zu Versand
  changeToVersand(){
    this.eventKontaktdaten = 'hide';
    this.eventVersand = 'show';
  }

  //Versand / Abholung wurde ausgewählt -> wechsel zu Kleidungsart
  changeToKleidungsart(){
    this.eventVersand = 'hide';
    this.eventKleidungsArt = 'show';
  }

  //Kleidungsart wurde ausgewählt -> wechsel zu Auswahl Krisengebiet
  changeToKrisengebiet(){
    this.eventKleidungsArt = 'hide';
    this.eventKrisengebiet = 'show';
  }

  //Spende wurde aufgegeben, alle benötigten Angaben wurde getätigt
  //Als letztes soll eine Bestätigung mit allen Daten angezeigt werden.
  changeToBestaetigung(){
    this.eventKrisengebiet = 'hide';
    this.eventBestaetigung = 'show';
  }

  animationZuVersandFertig(){
    //Kontaktdaten Form soll verborgen werden und ist noch in DOM 
    if(this.eventKontaktdaten == 'hide' && this.kontaktFormisVisible){
      this.kontaktFormisVisible = false;
      this.versandFormVisible = true;
    }
  }

  animationZuKleidungsartFertig(){
    //Versand / Abholung Form soll verborgen werden und ist noch in DOM 
    if(this.eventVersand == 'hide' && this.versandFormVisible){
      this.versandFormVisible = false;
      this.kleidungsartFormisVisible = true;
    }
  }

  animationZuKrisengebietFertig(){
    if(this.eventKleidungsArt == 'hide' && this.kleidungsartFormisVisible){
      this.kleidungsartFormisVisible = false;
      this.krisengebietFormVisible = true;
    }
  }

  animationZuBestaetigungFertig(){
    if(this.eventKrisengebiet == 'hide' && this.krisengebietFormVisible){
      this.krisengebietFormVisible = false;
      this.spendenBestaetigungVisible = true;
    }
  }


  
}
