import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/model/company';

@Component({
  selector: 'platinum-company-card',
  templateUrl: './platinum-company-card.component.html',
  styleUrls: ['./platinum-company-card.component.scss'],
})
export class PlatinumCompanyCardComponent {
  @Input() company: Company = new Company();

  constructor(private router: Router) {}

  openCompany() {
    this.router.navigate(['/kompanija/' + this.company.id]);
  }
}
