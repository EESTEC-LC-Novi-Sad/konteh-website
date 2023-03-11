import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityService } from 'src/app/services/activity.service';
import { ScheduleService } from 'src/app/services/schedule.service';
import { OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Schedule } from 'src/app/model/schedule';
import { Activity } from 'src/app/model/activity';

@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  showSchedule = environment.showSchedule;

  schedules: Schedule[] = [];
  activities: Activity[] = [];

  scheduleLoading: boolean = true;
  activityLoading: boolean = true;

  constructor(
    private router: Router,
    private activityService: ActivityService,
    private scheduleService: ScheduleService
  ) {}

  ngOnInit(): void {
    this.activityService.getAllActivities().subscribe((data) => {
      this.activities = this.activityService.convertDataToActivities(data);
      this.activityLoading = false;
      console.log(this.activities);
    });
  }

  openHomepage() {
    this.router.navigate(['']);
  }
}
