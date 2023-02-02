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
      let companyList = this.companyService.convertDataToCompanies(data);

      for (let i = 0; i < 10; i++) {
        let o = Object.assign({}, companyList[0]);
        this.companies.push(o);
      }

      for (let i = 0; i < 1; i++) {
        let o = Object.assign({}, companyList[0]);
        this.exclusiveCompany = o;
      }

      for (let i = 0; i < 3; i++) {
        let o = Object.assign({}, companyList[0]);
        this.platinumCompanies.push(o);
      }

      for (let i = 0; i < 7; i++) {
        let o = Object.assign({}, companyList[0]);
        this.goldCompanies.push(o);
      }

      for (let i = 0; i < 9; i++) {
        let o = Object.assign({}, companyList[0]);
        this.silverCompanies.push(o);
      }

      for (let i = 0; i < 11; i++) {
        let o = Object.assign({}, companyList[0]);
        this.bronzeCompanies.push(o);
      }
    });
  }

  openHomepage() {
    this.router.navigate(['']);
  }
}
