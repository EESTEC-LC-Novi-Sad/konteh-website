import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/model/company';

@Component({
  selector: 'gold-company-card',
  templateUrl: './gold-company-card.component.html',
  styleUrls: ['./gold-company-card.component.scss']
})
export class GoldCompanyCardComponent {
  @Input() company: Company = new Company();

  constructor(private router: Router) {}

  openCompany() {
    this.router.navigate(['/kompanija/' + this.company.id]);
  }
}
