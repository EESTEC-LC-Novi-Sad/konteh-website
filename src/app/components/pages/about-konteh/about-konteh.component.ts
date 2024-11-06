import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'about-konteh',
  templateUrl: './about-konteh.component.html',
  styleUrls: ['./about-konteh.component.scss'],
})
export class AboutKontehComponent {
  constructor(private router: Router) {}

  openHomepage() {
    this.router.navigate(['']);
  }
}
