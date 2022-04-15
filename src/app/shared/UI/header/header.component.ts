import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headerOpen: boolean = false;
  innerWidth!: number;
  constructor() {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.showMenuOnLarge();
  }

  @HostListener('window:resize', ['$event']) onResize() {
    this.innerWidth = window.innerWidth;
    this.showMenuOnLarge();
  }

  @HostListener('document:click', ['$event']) documentClickEvent($event: any) {
    if (this.innerWidth <= 600) {
      if ($event.target!.className === 'header__menu') {
        this.headerOpen = !this.headerOpen;
      } else {
        this.headerOpen = false;
      }

      if (this.headerOpen === false) {
        const menu = document.querySelector(
          '.header__menu'
        ) as HTMLInputElement;
        menu.checked = false;
      }
    }
  }

  showMenuOnLarge() {
    if (this.innerWidth >= 600) {
      this.headerOpen = true;
    } else {
      this.headerOpen = false;
    }
  }
}
