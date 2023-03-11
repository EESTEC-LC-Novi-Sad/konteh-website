import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityService } from 'src/app/services/activity.service';
import { ScheduleService } from 'src/app/services/schedule.service';
import { OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Schedule } from 'src/app/model/schedule';
import { Activity } from 'src/app/model/activity';
import { CalendarEvent, CalendarView } from 'angular-calendar';

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

  view: CalendarView = CalendarView.Day;
  viewDate1: Date = new Date('03 21 2023');
  viewDate2: Date = new Date('03 22 2023');
  events: CalendarEvent[] = [];

  constructor(
    private router: Router,
    private activityService: ActivityService,
    private scheduleService: ScheduleService
  ) {}

  ngOnInit(): void {
    this.activityService.getAllActivities().subscribe((data) => {
      this.activities = this.activityService.convertDataToActivities(data);
      this.activityLoading = false;
    });

    this.scheduleService.getAllSchedule().subscribe((data) => {
      this.schedules = this.scheduleService.convertDataToSchedules(data);

      for (let schedule of this.schedules) {
        let event = {
          start: new Date(schedule.startTime),
          end: new Date(schedule.endTime),
          title: schedule.title,
          location: schedule.location,
        };

        if (event.location != null) {
          event.title = '<b>' + event.title + '</b><br/>' + event.location;
        }

        this.events.push(event);
      }

      console.log(this.events[0]);

      this.scheduleLoading = false;
    });
  }

  openHomepage() {
    this.router.navigate(['']);
  }
}
