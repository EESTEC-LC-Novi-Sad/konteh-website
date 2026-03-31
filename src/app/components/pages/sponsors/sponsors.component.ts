import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediaSponsor } from 'src/app/model/media-sponsor';
import { MerchSponsor } from 'src/app/model/merch-sponsor';
import { ParnerSponsor } from 'src/app/model/partner-sponsor';
import { MediaService } from 'src/app/services/media.service';
import { MerchService } from 'src/app/services/merch.service';
import { PartnerService } from 'src/app/services/partner.service';
import { environment } from 'src/environments/environment';

const GENERAL_SPONSOR_NAME = "Coca-Cola HBC"
const PREMIUM_SPONSOR_NAME = "Nescafe"

@Component({
  selector: 'sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss'],
})
export class SponsorsComponent implements OnInit {
  showSponsors = environment.showSponsors;

  merchSponsors: MerchSponsor[] = [];
  partnerSponsors: ParnerSponsor[] = [];
  general: MerchSponsor = new MerchSponsor();
  premium: MerchSponsor = new MerchSponsor();

  merchLoading: boolean = true;
  partnerLoading: boolean = true;

  constructor(
    private router: Router,
    private partnerService: PartnerService,
    private merchService: MerchService,
  ) { }

  ngOnInit(): void {
    this.partnerService.getAllPartnerSponsors().subscribe((data) => {
      this.partnerSponsors = this.partnerService.convertDataToPartnerSponsors(data);
      this.partnerLoading = false;
    });

    this.merchService.getAllMerchSponsors().subscribe((data) => {
      const all = this.merchService.convertDataToMerchSponsors(data);
      this.merchSponsors = all.filter(e => e.name !== GENERAL_SPONSOR_NAME && e.name !== PREMIUM_SPONSOR_NAME);
      this.general = all.find(e => e.name === GENERAL_SPONSOR_NAME) ?? new MerchSponsor();
      this.premium = all.find(e => e.name === PREMIUM_SPONSOR_NAME) ?? new MerchSponsor();
      this.merchLoading = false;
    });
  }

  openHomepage() {
    this.router.navigate(['']).then();
  }
}
