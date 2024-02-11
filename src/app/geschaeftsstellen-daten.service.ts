import { Injectable } from '@angular/core';

interface Geschaeftsstelle {
  stadt: string;
  stadtTeil: string;
  imgPath: string;
  anschrift: string;
  telefonNr: string;
}

export interface Geschaeftsstellen {
  [key: string]: Geschaeftsstelle;
}

@Injectable({
  providedIn: 'root'
})
export class GeschaeftsstellenDatenService {

  private geschaeftsStellen: Geschaeftsstellen = {
    '10' : {
      'stadt' : 'Berlin',
      'stadtTeil' : 'Berlin- Schöneberg',
      'imgPath' : 'berlin.jpg',
      'anschrift' : 'Bautzener Str. 46, 10829 Berlin',
      'telefonNr' : '0177 / 9876543'
    },
    '22' : {
      'stadt' : 'Hamburg',
      'stadtTeil' : 'Altona',
      'imgPath' : 'hamburg.jpg',
      'anschrift' : 'Rugenbarg 179, 22549 Hamburg',
      'telefonNr' : '0173 / 1234736'
    },
    '40' : {
      'stadt' : 'Düsseldorf',
      'stadtTeil' : 'Stadtbezirk 1',
      'imgPath' : 'dusseldorf.jpg',
      'anschrift' : 'Toulouser Allee 65A, 40211 Düsseldorf',
      'telefonNr' : '0176 / 2233441'
    },
    '01' : {
      'stadt' : 'Dresden',
      'stadtTeil' : 'Leuben',
      'imgPath' : 'dresden.jpg',
      'anschrift' : 'Dieselstraße 4, 01257 Dresden',
      'telefonNr' : '0176 / 22354521'
    },
    '80' : {
      'stadt' : 'München',
      'stadtTeil' : 'Schwabing (Westteil)',
      'imgPath' : 'munchen.jpg',
      'anschrift' : 'Brunnerstraße 91, 80804 München',
      'telefonNr' : '0171 / 23144521'
    },
    '60' : {
      'stadt' : 'Frankfurt am Main',
      'stadtTeil' : 'Heddernheim',
      'imgPath' : 'frankfurt.jpg',
      'anschrift' : 'Titusstraße 7C, 60439 Frankfurt am Main',
      'telefonNr' : '0176 / 22255521'
    },
    '66' : {
      'stadt' : 'Saarbrücken',
      'stadtTeil' : 'Saarbrücken-Mitte',
      'imgPath' : 'saarbrucken.jpg',
      'anschrift' : 'Ürziger Weg 11, 66113 Saarbrücken',
      'telefonNr' : '0176 / 12345566'
    },
    '56' : {
      'stadt' : 'Koblenz',
      'stadtTeil' : 'Lützel',
      'imgPath' : 'koblenz.jpg',
      'anschrift' : 'Wallersheimer- Weg 100, 56070 Koblenz',
      'telefonNr' : '0171 / 12321556'
    },
    '93' : {
      'stadt' : 'Regensburg',
      'stadtTeil' : 'Innenstadt',
      'imgPath' : 'regensburg.jpg',
      'anschrift' : 'Roter-Brach-Weg 89, 93049 Regensburg',
      'telefonNr' : '0177 / 9982616'
    },

  };

  constructor() {}

  getGeschaeftDaten(){
    return this.geschaeftsStellen;
  }
  
  checkGeschaeftInNähe(plz : string){
    //Um ein Sammelfahrzeug zu beauftragen die Kleidung Zuhause abzuholen, müssen die ersten beiden Ziffern der PLZ 
    //übereinstimmen. Keys in Object das die Geschäftstellen speichert sind die ersten beiden Ziffern der PLZ
    const geschaeftsStellenKeys = Object.keys(this.geschaeftsStellen);
    const vergleichsZiffern = plz.slice(0,2);
    if(geschaeftsStellenKeys.includes(vergleichsZiffern)){
      return true;
    }else{
      return false;
    }
  }

}
