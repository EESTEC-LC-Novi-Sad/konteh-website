import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Company } from 'src/app/model/company';
import { CompanyService } from 'src/app/services/company.service';
import lgZoom from 'lightgallery/plugins/zoom';

@Component({
  selector: 'company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.scss'],
})
export class CompanyPageComponent implements OnInit {
  company: Company = new Company();
  settings = {
    counter: false,
    plugins: [lgZoom],
  };

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
        console.log(this.company);
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
