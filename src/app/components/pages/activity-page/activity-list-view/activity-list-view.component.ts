import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from 'src/app/model/activity';
import { ActivityService } from 'src/app/services/activity.service';
import { activities } from '../activities';

@Component({
  selector: 'activity-list-view',
  templateUrl: './activity-list-view.component.html',
  styleUrls: ['./activity-list-view.component.scss']
})
export class ActivityListViewComponent {
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
