import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  tab: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.toggleSelectedMenuItem();
    }, 20);
  }

  toggleSelectedMenuItem() {
    switch (this.router.url) {
      case '/o-konteh-u':
        this.tab = 1;
        break;
      case '/raspored':
        this.tab = 2;
        break;
      case '/kompanije':
        this.tab = 3;
        break;
      case '/pokrovitelji':
        this.tab = 4;
        break;
      case '/kontakt':
        this.tab = 5;
        break;
      default:
        this.tab = 0;
        break;
    }
  }

  switchSelectedMenuItem(tab: number) {
    this.tab = tab;
    switch (tab) {
      case 1:
        this.router.navigate(['o-konteh-u']);
        break;
      case 2:
        this.router.navigate(['raspored']);
        break;
      case 3:
        this.router.navigate(['kompanije']);
        break;
      case 4:
        this.router.navigate(['pokrovitelji']);
        break;
      case 5:
        this.router.navigate(['kontakt']);
        break;
      default:
        this.router.navigate(['']);
        break;
    }
  }
}
