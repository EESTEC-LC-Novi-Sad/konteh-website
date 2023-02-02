import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from 'src/app/model/offer';
import { OfferService } from 'src/app/services/offer.service';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'offer-page',
  templateUrl: './offer-page.component.html',
  styleUrls: ['./offer-page.component.scss'],
})
export class OfferPageComponent implements OnInit {
  offer: Offer = new Offer();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private offerService: OfferService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];

      this.offerService.getById(id).subscribe((data) => {
        this.offer = this.offerService.convertDataToOffer(data);
        this.titleService.setTitle('KONTEH - ' + this.offer.positionName);
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

  apply() {
    window.open(this.offer.callToActionUrl, '_blank');
  }

  openCompany() {
    this.router.navigate(['/kompanija/' + this.offer.company.sys.id]);
  }
}
