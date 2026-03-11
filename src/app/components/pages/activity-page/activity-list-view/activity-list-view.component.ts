import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from 'src/app/model/activity';
import { ActivityService } from 'src/app/services/activity.service';
import { activities } from '../activities';

@Component({
  selector: 'activity-list-view',
  templateUrl: './activity-list-view.component.html',
  styleUrls: ['./activity-list-view.component.scss']
})
export class ActivityListViewComponent implements AfterViewInit {
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


  activities = activities;
  activityLoading: boolean = true;

  constructor(
    private router: Router,) { }

  ngOnInit(): void {
    this.activityLoading = false;
  }

  openHomepage() {
    this.router.navigate(['']);
  }
}
