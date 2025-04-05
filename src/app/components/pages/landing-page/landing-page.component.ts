import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import {MatDialog} from "@angular/material/dialog";
import lgZoom from "lightgallery/plugins/zoom";
import {PolicyComponent} from "../about-konteh/policy/policy.component";

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    const video = this.bgVideo.nativeElement;

    video.muted = true; // Critical in some browsers
    video.setAttribute('playsinline', 'true');
    video.setAttribute('muted', 'true'); // also attribute
    video.setAttribute('autoplay', 'true'); // safety net

    video.load(); // reinitialize

    video.play().then(() => {
      console.log('Video autoplayed');
    }).catch(err => {
      console.warn('Autoplay blocked, waiting for user interaction:', err);
      this.setupFallbackAutoplay(video);
    });
  }
  setupFallbackAutoplay(video: HTMLVideoElement) {
    const tryPlay = () => {
      video.play().catch(err => console.warn('Still failed to play:', err));
      document.removeEventListener('click', tryPlay);
    };

    document.addEventListener('click', tryPlay);
  }




  playVideo() {
    const video = this.bgVideo.nativeElement;

    // Just in case, double-check autoplay conditions
    if (video && video.paused) {
      video.play().catch((e) => {
        console.warn('Autoplay still blocked:', e);
      });
    }
  }

  settings = {
    counter: false,
    plugins: [lgZoom],
  };

  showOffers = environment.showOffers;

  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {}

  redirectToWebsite(url: string): void {
    console.log('Redirecting to website...');
    window.open(url, '_blank');
  }

  route(page: string): void {
    this.router.navigate([page]);
  }

  openHomepage() {
    this.router.navigate(['']);
  }

  openPolicy() {
    this.dialog.open(PolicyComponent);
  }

  openCVLink() {
    window.open("https://cv.konteh.org/", "_blank");
  }


}
