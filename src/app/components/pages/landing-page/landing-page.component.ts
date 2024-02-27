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

  redirectToWebsite(url: string): void {
    console.log('Redirecting to website...');
    window.open(url, '_blank');
  }

  route(page: string): void {
    this.router.navigate([page]);
  }
}
