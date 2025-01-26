import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  tab: number = 0;
  showOffers = environment.showOffers;


  constructor(private router: Router) {}

  ngOnInit(): void {
    this.toggleSelectedMenuItem();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.toggleSelectedMenuItem();
      }
    });
  }


  toggleSelectedMenuItem() {
    console.log("TAB IS ", this.tab);
    const route = this.router.url.split('?')[0]; // Remove query params
    console.log('Current route:', route);
    switch (this.router.url) {
      case '/o-konteh-u':
        this.tab = 1;
        break;
      case '/aktivnosti':
        this.tab = 2;
        break;
      case '/raspored':
        this.tab = 3;
        break;
      case '/kompanije':
        this.tab = 4;
        break;
      case '/pokrovitelji':
        this.tab = 5;
        break;
      case '/kontakt':
        this.tab = 6;
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
        this.router.navigate(['aktivnosti']);
        break;
      case 3:
        this.router.navigate(['raspored']);
        break;
      case 4:
        this.router.navigate(['kompanije']);
        break;
      case 5:
        this.router.navigate(['pokrovitelji']);
        break;
      case 6:
        this.router.navigate(['kontakt']);
        break;
      default:
        this.router.navigate(['']);
        break;
    }
  }
}
