import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card'; 
import { CommonModule } from '@angular/common';
import { GeschaeftsstellenDatenService } from '../geschaeftsstellen-daten.service';
//Interface aus Service importieren, damit Typ verwendet werden kann
import { Geschaeftsstellen } from '../geschaeftsstellen-daten.service';

@Component({
  selector: 'app-geschaeftsstellen',
  standalone: true,
  imports: [CommonModule,MatCardModule],
  templateUrl: './geschaeftsstellen.component.html',
  styleUrl: './geschaeftsstellen.component.scss'
})
export class GeschaeftsstellenComponent {

  public geschaeftsStellen! : Geschaeftsstellen;
  
  constructor(private geschaeftsStellenDatenService: GeschaeftsstellenDatenService){
    this.geschaeftsStellen = this.geschaeftsStellenDatenService.getGeschaeftDaten();
  }
}
