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

  activityGroups: ActivityGroup[] = [];
  groupedActivities: { type: string; groups: ActivityGroup[] }[] = [];
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
  this.activityGroupService.getAllActivityGroups().subscribe((data) => {
    this.activityGroups = this.activityGroupService.convertDataToActivityGroups(data);
    this.groupedActivities = this.groupByType(this.activityGroups);
    this.groupLoading = false;
  });
  }

 private readonly TYPE_ORDER = [
  'Keynote',
  'Track',
  'Panel',
  'Radionice',
  'Takmičenje',
  'Sajam'
];

private groupByType(groups: ActivityGroup[]): { type: string; groups: ActivityGroup[] }[] {
  const map = new Map<string, ActivityGroup[]>();
  for (const group of groups) {
    const type = group.type || 'Ostalo';
    if (!map.has(type)) map.set(type, []);
    map.get(type)!.push(group);
  }
  return Array.from(map.entries())
    .map(([type, groups]) => ({ type, groups }))
    .sort((a, b) => {
      const indexA = this.TYPE_ORDER.indexOf(a.type);
      const indexB = this.TYPE_ORDER.indexOf(b.type);
      const orderA = indexA === -1 ? 999 : indexA;
      const orderB = indexB === -1 ? 999 : indexB;
      return orderA - orderB;
    });
}
}