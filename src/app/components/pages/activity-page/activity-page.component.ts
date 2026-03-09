import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityGroup } from 'src/app/model/activity-group';
import { ActivityGroupService } from 'src/app/services/activity-group.service';

@Component({
  selector: 'activity-page',
  templateUrl: './activity-page.component.html',
  styleUrls: ['./activity-page.component.scss']
})
export class ActivityPageComponent implements OnInit, AfterViewInit {
  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;

  activityGroup: ActivityGroup = new ActivityGroup();
  groupLoading = true;

  constructor(
    private route: ActivatedRoute,
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
      const tryPlay = () => { video.play(); document.removeEventListener('click', tryPlay); };
      document.addEventListener('click', tryPlay);
    });
  }

  ngOnInit(): void {
  this.route.params.subscribe((params) => {
    this.activityGroupService.getById(params['id']).subscribe((data) => {
      this.activityGroup = this.activityGroupService.convertDataToActivityGroup(data);
      this.groupLoading = false;
    });
  });
}
}