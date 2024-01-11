import { Component } from '@angular/core';
import { LandingMainComponent } from '../landing-main/landing-main.component';
import { LandingMainManualComponent } from '../landing-main-manual/landing-main-manual.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,LandingMainComponent,LandingMainManualComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
