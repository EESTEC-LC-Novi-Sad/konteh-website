import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/model/company';
import { CompanyService } from 'src/app/services/company.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent implements OnInit {
  showCompanies = environment.showCompanies;

  companies: Company[] = [];
  exclusiveCompany = new Company();
  platinumCompanies: Company[] = [];
  goldCompanies: Company[] = [];
  silverCompanies: Company[] = [];
  bronzeCompanies: Company[] = [];

  constructor(private router: Router, private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getAllCompanies().subscribe((data) => {
      this.companies = this.companyService.convertDataToCompanies(data);
      this.companies.sort((a,b) => {
        return a.name.localeCompare(b.name);
      });

      for (let company of this.companies) {
        if (company.tier == 'Ekskluzivni') {
          this.exclusiveCompany = company;
        } else if (company.tier == 'Platinum') {
          this.platinumCompanies.push(company);
        } else if (company.tier == 'Zlatni') {
          this.goldCompanies.push(company);
        } else if (company.tier == 'Srebrni') {
          this.silverCompanies.push(company);
        } else if (company.tier == 'Bronzani') {
          this.bronzeCompanies.push(company);
        }
      }
    });
  }

  openHomepage() {
    this.router.navigate(['']);
  }
}
