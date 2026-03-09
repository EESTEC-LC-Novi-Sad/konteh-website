import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityGroup } from 'src/app/model/activity-group';
import { ActivityGroupService } from 'src/app/services/activity-group.service';

@Component({
  selector: 'activity-list-view',
  templateUrl: './activity-list-view.component.html',
  styleUrls: ['./activity-list-view.component.scss']
})
export class ActivityListViewComponent implements OnInit, AfterViewInit {
  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;

  activityGroups: ActivityGroup[] = [];
  groupsLoading = true;

  constructor(
    private router: Router,
    private activityGroupService: ActivityGroupService
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
      this.setupFallbackAutoplay(video);
    });
  }

  setupFallbackAutoplay(video: HTMLVideoElement) {
    const tryPlay = () => {
      video.play().catch(err => console.warn('Still failed:', err));
      document.removeEventListener('click', tryPlay);
    };
    document.addEventListener('click', tryPlay);
  }

  ngOnInit(): void {
    this.activityGroupService.getAllActivityGroups().subscribe((data) => {
      this.activityGroups = this.activityGroupService.convertDataToActivityGroups(data);
      this.groupsLoading = false;
    });
  }
}