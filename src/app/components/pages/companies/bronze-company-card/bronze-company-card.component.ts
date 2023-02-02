import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/model/company';

@Component({
  selector: 'bronze-company-card',
  templateUrl: './bronze-company-card.component.html',
  styleUrls: ['./bronze-company-card.component.scss'],
})
export class BronzeCompanyCardComponent {
  @Input() company: Company = new Company();

  constructor(private router: Router) {}

}
