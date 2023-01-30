import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent {
  showCompanies = environment.showCompanies;

  constructor(private router: Router) {}

  openHomepage() {
    this.router.navigate(['']);
  }
}
