import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {MediaSponsor} from "../../../model/media-sponsor";
import {MerchSponsor} from "../../../model/merch-sponsor";
import {ParnerSponsor} from "../../../model/partner-sponsor";
import {Router} from "@angular/router";
import {PartnerService} from "../../../services/partner.service";
import {MerchService} from "../../../services/merch.service";
import {MediaService} from "../../../services/media.service";

@Component({
  selector: 'media-sponsors',
  templateUrl: './media-sponsors.component.html',
  styleUrls: ['./media-sponsors.component.scss']
})
export class MediaSponsorsComponent  implements OnInit {
  showSponsors = environment.showSponsors;

  mediaSponsors: MediaSponsor[] = [];
  merchSponsors: MerchSponsor[] = [];
  partnerSponsors: ParnerSponsor[] = [];
  knjaz: MerchSponsor = new MerchSponsor();
  rtv: MediaSponsor = new MediaSponsor();

  mediaLoading: boolean = true;
  merchLoading: boolean = true;
  partnerLoading: boolean = true;

  constructor(
    private router: Router,
    private partnerService: PartnerService,
    private merchService: MerchService,
    private mediaService: MediaService
  ) { }

  ngOnInit(): void {
    this.partnerService.getAllPartnerSponsors().subscribe((data) => {
      this.partnerSponsors = this.partnerService.convertDataToPartnerSponsors(data);
      this.partnerLoading = false;
    });

    this.mediaService.getAllMediaSponsors().subscribe((data) => {
      const all = this.mediaService.convertDataToMediaSponsors(data);
      this.mediaSponsors = all.filter(e => e.name !== 'RTV');
      const r = all.find(e => e.name === 'RTV');
      this.rtv = r !== undefined ? r : this.rtv;
      this.mediaLoading = false;
    });
  }

  openHomepage() {
    this.router.navigate(['']);
  }
}
