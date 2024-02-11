import { Injectable } from '@angular/core';

//Schnittstelle für Kontaktdaten
interface Kontaktdaten{
  vorname : string;
  nachname : string;
  email : string;
}

//Schnittstelle für Versandart
interface Versandart{
  art : string;
  strasse : string | null;
  hausnummer : string | null;
  plz : string | null;
  ort : string | null;
}

interface Kleidungsart{
  kleidungsstuecke : [string,number][];
}

interface Krisengebiet{
  krisengebiet : string;
}

@Injectable({
  providedIn: 'root'
})

export class SpendenDatenService {
  private krisengebiete = ['Ukraine', 'Syrien', 'Somalia', 'Naher Osten', 'Haiti', 'Burkina Faso'];
  private kontaktdaten: Kontaktdaten | null = null; 
  private versandart: Versandart | null = null; 
  private kleidungsart: Kleidungsart | null = null;
  private krisengebiet: Krisengebiet | null = null; 

  constructor() { }

  getKrisengebiete(){
    return this.krisengebiete;
  }

  setKontaktdaten(data : Kontaktdaten){
    this.kontaktdaten = data;
    // console.log(this.kontaktdaten)
  }

  setVersandart(data : Versandart){
    this.versandart = data;
    // console.log(this.versandart);
  }

  setKleidungsart(data : Kleidungsart){
    this.kleidungsart = data;
    // console.log(this.kleidungsart);
  }

  setKrisengebiet(data : Krisengebiet){
    this.krisengebiet = data;
    // console.log(this.krisengebiet)
  }

  getZusammenfassung(){
    return{
      "Kontaktdaten" : this.kontaktdaten,
      "Versandart"   : this.versandart,
      "Kleidungsart" : this.kleidungsart,
      "Krisengebiet" : this.krisengebiet
    }
  }

}
