import { Component, Input } from '@angular/core';
import { Company } from 'src/app/model/company';

@Component({
  selector: 'gold-company-card',
  templateUrl: './gold-company-card.component.html',
  styleUrls: ['./gold-company-card.component.scss']
})
export class GoldCompanyCardComponent {
  @Input() company: Company = new Company();
}
