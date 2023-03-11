import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Company } from 'src/app/model/company';
import { CompanyService } from 'src/app/services/company.service';
import lgZoom from 'lightgallery/plugins/zoom';
import { Offer } from 'src/app/model/offer';
import { Activity } from 'src/app/model/activity';
import { OfferService } from 'src/app/services/offer.service';
import { ActivityService } from 'src/app/services/activity.service';

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

  offers: Offer[] = [];
  activities: Activity[] = [];
  offersLoading: boolean = true;
  activitiesLoading: boolean = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title,
    private companyService: CompanyService,
    private offerService: OfferService,
    private activityService: ActivityService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];

      this.companyService.getById(id).subscribe(
        (data) => {
          this.company = this.companyService.convertDataToCompany(data);
          console.log(this.company);
          this.titleService.setTitle('KONTEH - ' + this.company.name);

          this.offerService.getAllOffers().subscribe((data) => {
            let allOffers = this.offerService.convertDataToOffers(data);
            for (let offer of allOffers) {
              if (offer.company.fields.name == this.company.name) {
                this.offers.push(offer);
              }
            }
            this.offersLoading = false;
          });

          this.activityService.getAllActivities().subscribe((data) => {
            let allActivities =
              this.activityService.convertDataToActivities(data);
            for (let activity of allActivities) {
              if (activity.company.fields.name == this.company.name) {
                this.activities.push(activity);
              }
            }
            this.activitiesLoading = false;
          });
        },

        (err) => {
          this.router.navigate(['/404']);
        }
      );
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
}
