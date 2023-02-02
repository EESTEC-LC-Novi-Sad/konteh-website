import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Company } from 'src/app/model/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.scss'],
})
export class CompanyPageComponent implements OnInit {
  company: Company = new Company();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title,
    private companyService: CompanyService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];

      this.companyService.getById(id).subscribe((data) => {
        this.company = this.companyService.convertDataToCompany(data);
        this.titleService.setTitle('KONTEH - ' + this.company.name);
      });
    });
  }

  returnHtmlFromRichText(richText: any) {
    if (
      richText === undefined ||
      richText === null ||
      richText.nodeType !== 'document'
    ) {
      return '<p>Error</p>';
    }
    return documentToHtmlString(richText);
  }

  openWebsite() {
    window.open(this.company.website, '_blank');
  }
}
