import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PolicyComponent } from './policy/policy.component';
import lgZoom from 'lightgallery/plugins/zoom';

@Component({
  selector: 'about-konteh',
  templateUrl: './about-konteh.component.html',
  styleUrls: ['./about-konteh.component.scss'],
})
export class AboutKontehComponent implements AfterViewInit {
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



  constructor(private router: Router, public dialog: MatDialog) {}

  settings = {
    counter: false,
    plugins: [lgZoom],
  };

  openHomepage() {
    this.router.navigate(['']);
  }

  openPolicy() {
    this.dialog.open(PolicyComponent);
  }
}
