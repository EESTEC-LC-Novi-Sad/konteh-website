import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss'],
})
export class SponsorsComponent {
  showSponsors = environment.showSponsors;

  constructor(private router: Router) {}

  openHomepage() {
    this.router.navigate(['']);
  }
}
