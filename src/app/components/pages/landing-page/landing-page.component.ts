import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  showOffers = environment.showOffers;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  openLink(url: string) {
    window.open(url, '_blank');
  }

  openSchedule() {
    this.router.navigate(['/raspored']);
  }

  openCompanies() {
    this.router.navigate(['/pokrovitelji']);
  }

  openCv() {
    window.open('https://cv.konteh.org/auth/login', '_blank');
  }

  openOffers() {
    this.router.navigate(['/ponude']);
  }
}
