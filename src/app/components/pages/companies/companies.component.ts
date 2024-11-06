import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent {

  constructor(private router: Router) {}

  openHomepage() {
    this.router.navigate(['']);
  }
}
