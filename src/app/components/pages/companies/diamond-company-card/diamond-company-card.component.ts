import {Component, Input} from '@angular/core';
import {Company} from "../../../../model/company";
import {Router} from "@angular/router";

@Component({
  selector: 'diamond-company-card',
  templateUrl: './diamond-company-card.component.html',
  styleUrls: ['./diamond-company-card.component.scss']
})
export class DiamondCompanyCardComponent {
  @Input() company: Company = new Company();

  constructor(private router: Router) {}

}
