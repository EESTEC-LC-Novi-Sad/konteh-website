import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent {
  constructor(private router: Router) {}

  openHomepage() {
    this.router.navigate(['']);
  }
}
