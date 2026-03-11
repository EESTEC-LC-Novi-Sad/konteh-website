import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { environment } from "../../../../environments/environment";
import { MediaSponsor } from "../../../model/media-sponsor";
import { ParnerSponsor } from "../../../model/partner-sponsor";
import { Router } from "@angular/router";
import { PartnerService } from "../../../services/partner.service";
import { MediaService } from "../../../services/media.service";

@Component({
  selector: 'media-sponsors',
  templateUrl: './media-sponsors.component.html',
  styleUrls: ['./media-sponsors.component.scss']
})
export class MediaSponsorsComponent implements OnInit, AfterViewInit {
  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;
  showSponsors = environment.showSponsors;
  mediaSponsors: MediaSponsor[] = [];
  partnerSponsors: ParnerSponsor[] = [];
  mediaLoading = true;
  partnerLoading = true;

  constructor(
    private router: Router,
    private partnerService: PartnerService,
    private mediaService: MediaService
  ) {}

  ngAfterViewInit(): void {
    const video = this.bgVideo.nativeElement;
    video.muted = true;
    video.setAttribute('playsinline', 'true');
    video.setAttribute('muted', 'true');
    video.setAttribute('autoplay', 'true');
    video.load();
    video.play().catch(err => {
      console.warn('Autoplay blocked:', err);
      const tryPlay = () => { video.play(); document.removeEventListener('click', tryPlay); };
      document.addEventListener('click', tryPlay);
    });
  }

  ngOnInit(): void {
    this.partnerService.getAllPartnerSponsors().subscribe((data) => {
      this.partnerSponsors = this.partnerService.convertDataToPartnerSponsors(data);
      this.partnerLoading = false;
    });
    this.mediaService.getAllMediaSponsors().subscribe((data) => {
      this.mediaSponsors = this.mediaService.convertDataToMediaSponsors(data);
      this.mediaLoading = false;
    });
  }
}