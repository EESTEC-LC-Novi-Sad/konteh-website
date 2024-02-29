import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleService } from 'src/app/services/schedule.service';
import { OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Schedule } from 'src/app/model/schedule';


@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {

  // showSchedule = environment.showSchedule;

  schedules: Schedule[] = [];
  filteredSchedules: Schedule[] = [];

  scheduleLoading: boolean = true;

  selectedDay: number = 0;

  constructor(
    private router: Router,
    private scheduleService: ScheduleService
  ) {}

  ngOnInit(): void {
    this.scheduleService.getAllSchedule().subscribe((data) => {
      console.log(data);
      this.schedules = this.scheduleService.convertDataToSchedules(data);
      this.schedules.sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime());
      this.filteredSchedules = this.schedules;
      this.scheduleLoading = false;
    });
  }

  filterSchedule(day: number){
    if(day === this.selectedDay) {
      this.selectedDay = 0;
      this.filteredSchedules = this.schedules;
      return;
    }
    this.selectedDay = day;
    this.filteredSchedules = this.schedules.filter((schedule) => new Date(schedule.startTime).getDate() === day);
  }

  openHomepage() {
    this.router.navigate(['']);
  }
}
