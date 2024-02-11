import { Component,OnInit } from '@angular/core';
import { SpendenDatenService } from '../spenden-daten.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-spenden-bestaetigung',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './spenden-bestaetigung.component.html',
  styleUrl: './spenden-bestaetigung.component.scss'
})
export class SpendenBestaetigungComponent {
  zusammenfassung: any; 

  constructor(private spendenDatenService: SpendenDatenService){}

  ngOnInit(): void {
    //Daten aus Service abrufen
    this.zusammenfassung = this.spendenDatenService.getZusammenfassung();
  }

}
