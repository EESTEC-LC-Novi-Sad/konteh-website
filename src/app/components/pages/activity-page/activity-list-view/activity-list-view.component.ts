import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from 'src/app/model/activity';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'activity-list-view',
  templateUrl: './activity-list-view.component.html',
  styleUrls: ['./activity-list-view.component.scss']
})
export class ActivityListViewComponent {

  activities: Activity[] = [];

  activityLoading: boolean = true;

  constructor(
    private activityService: ActivityService,
    private router: Router,) { }

  ngOnInit(): void {
    this.activityService.getAllActivities().subscribe((data) => {
      console.log(data);
      this.activities = this.activityService.convertDataToActivities(data);
      this.activityLoading = false;
      console.log(this.activities.length, "    ", !this.activityLoading);
    });
  }

  openHomepage() {
    this.router.navigate(['']);
  }
}
