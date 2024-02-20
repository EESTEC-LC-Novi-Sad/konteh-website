import { Component, ElementRef, ViewChild } from '@angular/core';
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

// const colors: Record<string, EventColor> = {
//   accent: {
//     primary: '#21a8ad',
//     secondary: '#e3faf5',
//   },
//   blue: {
//     primary: '#1e90ff',
//     secondary: '#D1E8FF',
//   },
// };

@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {

  showSchedule = environment.showSchedule;

  schedules: Schedule[] = [];

  scheduleLoading: boolean = true;

  constructor(
    private router: Router,
    private scheduleService: ScheduleService
  ) {}

  ngOnInit(): void {

    this.scheduleService.getAllSchedule().subscribe((data) => {
      console.log(data);
      this.schedules = this.scheduleService.convertDataToSchedules(data);
      this.schedules.sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime());
      this.scheduleLoading = false;
    });
  }

  openHomepage() {
    this.router.navigate(['']);
  }
}
