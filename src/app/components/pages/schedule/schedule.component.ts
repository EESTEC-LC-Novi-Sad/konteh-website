import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityService } from 'src/app/services/activity.service';
import { ScheduleService } from 'src/app/services/schedule.service';
import { OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Schedule } from 'src/app/model/schedule';
import { Activity } from 'src/app/model/activity';
import { CalendarEvent, CalendarView } from 'angular-calendar';
3;
import { EventColor } from 'calendar-utils';

const colors: Record<string, EventColor> = {
  accent: {
    primary: '#21a8ad',
    secondary: '#e3faf5',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
};

@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  showSchedule = environment.showSchedule;

  schedules: Schedule[] = [];

  scheduleLoading: boolean = true;

  view: CalendarView = CalendarView.Day;
  viewDate1: Date = new Date('03 21 2023');
  viewDate2: Date = new Date('03 22 2023');
  events: CalendarEvent[] = [];

  constructor(
    private router: Router,
    private scheduleService: ScheduleService
  ) {}

  ngOnInit(): void {

    this.scheduleService.getAllSchedule().subscribe((data) => {
      this.schedules = this.scheduleService.convertDataToSchedules(data);

      for (let schedule of this.schedules) {
        let event = {
          start: new Date(schedule.startTime),
          end: new Date(schedule.endTime),
          title: schedule.title,
          location: schedule.location,
          color: colors.blue,
        };

        if (event.location != null) {
          event.title = '<b>' + event.title + '</b><br/>' + event.location;
        }

        if (event.title.includes('simulacija')) {
          event.color = colors.accent;
        }

        this.events.push(event);
      }

      this.scheduleLoading = false;
    });
  }

  openHomepage() {
    this.router.navigate(['']);
  }
}
