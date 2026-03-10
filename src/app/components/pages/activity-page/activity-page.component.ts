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
  groupedActivities: { type: string; category: string; groups: ActivityGroup[]; showCategoryHeader: boolean }[] = [];
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
private readonly TYPE_CONFIG: { type: string; category: string }[] = [
  { type: 'keynote',    category: 'akademski' },
  { type: 'track',      category: 'akademski' },
  { type: 'diskusije',  category: 'akademski' },
  { type: 'panel',      category: 'akademski' },
  { type: 'radionice',  category: 'akademski' },
  { type: 'sajam',      category: 'sajam' },
  { type: 'takmičenje', category: 'sajam' },
];

private groupByType(groups: ActivityGroup[]): typeof this.groupedActivities {
  const map = new Map<string, ActivityGroup[]>();
  for (const group of groups) {
    const type = group.type || 'Ostalo';
    if (!map.has(type)) map.set(type, []);
    map.get(type)!.push(group);
  }

  const sorted = Array.from(map.entries())
    .map(([type, groups]) => {
      const config = this.TYPE_CONFIG.find(c => c.type === type.toLowerCase());
      return { type, category: config?.category ?? 'akademski', groups, showCategoryHeader: false };
    })
    .sort((a, b) => {
      const indexA = this.TYPE_CONFIG.findIndex(c => c.type === a.type.toLowerCase());
      const indexB = this.TYPE_CONFIG.findIndex(c => c.type === b.type.toLowerCase());
      return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
    });

  // mark where category changes
  sorted.forEach((section, i) => {
    section.showCategoryHeader = i === 0 || section.category !== sorted[i - 1].category;
  });

  return sorted;
}
}