import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/model/company';

@Component({
  selector: 'silver-company-card',
  templateUrl: './silver-company-card.component.html',
  styleUrls: ['./silver-company-card.component.scss'],
})
export class SilverCompanyCardComponent {
  @Input() company: Company = new Company();

  constructor(private router: Router) {}

  openCompany() {
    this.router.navigate(['/kompanija/' + this.company.id]);
  }
}
