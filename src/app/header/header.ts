import { Component, EventEmitter, Output } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

export enum Languages {
  CHN = "中文",
  ENG = "English",
}

@Component({
  selector: 'toku-header',
  standalone: true,
  imports: [
    MatButtonModule,
    MatSidenavModule, 
    MatIconModule
  ],
  templateUrl: './header.ng.html',
  styleUrl: './header.scss'
})

export class HeaderComponent {
  @Output() readonly toggleSidenav = new EventEmitter<void>();

  language: Languages = Languages.ENG;

  get Languages(): typeof Languages {
    return Languages;
  }

  toggleLanguage() {
    if (this.language === Languages.ENG) {
      this.language = Languages.CHN;
    } else {
      this.language = Languages.ENG;
    }
  }
}
