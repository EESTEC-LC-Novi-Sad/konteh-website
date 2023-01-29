import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
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
}
