import { Component, Input } from '@angular/core';
import { Company } from 'src/app/model/company';

@Component({
  selector: 'exclusive-company-card',
  templateUrl: './exclusive-company-card.component.html',
  styleUrls: ['./exclusive-company-card.component.scss']
})
export class ExclusiveCompanyCardComponent {
  @Input() company: Company = new Company();
}
