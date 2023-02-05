import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediaSponsor } from 'src/app/model/media-sponsor';
import { MerchSponsor } from 'src/app/model/merch-sponsor';
import { ParnerSponsor } from 'src/app/model/partner-sponsor';
import { MediaService } from 'src/app/services/media.service';
import { MerchService } from 'src/app/services/merch.service';
import { PartnerService } from 'src/app/services/partner.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss'],
})
export class SponsorsComponent implements OnInit {
  showSponsors = environment.showSponsors;

  mediaSponsors: MediaSponsor[] = [];
  merchSponsors: MerchSponsor[] = [];
  partnerSponsors: ParnerSponsor[] = [];

  constructor(
    private router: Router,
    private partnerService: PartnerService,
    private merchService: MerchService,
    private mediaService: MediaService
  ) {}

  ngOnInit(): void {
    this.partnerService.getAllPartnerSponsors().subscribe((data) => {
      this.partnerSponsors =
        this.partnerService.convertDataToPartnerSponsors(data);
    });

    this.mediaService.getAllMediaSponsors().subscribe((data) => {
      this.mediaSponsors = this.mediaService.convertDataToMediaSponsors(data);
    });

    this.merchService.getAllMerchSponsors().subscribe((data) => {
      this.merchSponsors = this.merchService.convertDataToMerchSponsors(data);
    });
  }

  openHomepage() {
    this.router.navigate(['']);
  }
}
