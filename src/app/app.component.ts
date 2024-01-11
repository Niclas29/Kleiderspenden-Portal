
import { Component, ElementRef, ViewChild, HostListener, AfterViewInit } from '@angular/core';

import { RouterModule, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule,HeaderComponent,FooterComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Kleiderspenden-Portal';
  @ViewChild(HeaderComponent, { static: false }) headerComponent!: HeaderComponent;
  @ViewChild('main') main!: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    this.adjustMainPadding();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:Event) {
    this.adjustMainPadding();
  }

  private adjustMainPadding() {
    // Warte auf die nächste Event Loop, damit die Höhe korrekt berechnet wird
    setTimeout(() => {
      const headerHeight = this.headerComponent.elementRef.nativeElement.firstChild.offsetHeight;
      this.main.nativeElement.style.paddingTop = `${headerHeight}px`;
    });
  }
}
