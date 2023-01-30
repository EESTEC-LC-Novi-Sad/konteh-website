import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent {
  showSchedule = environment.showSchedule;

  constructor(private router: Router) {}

  openHomepage() {
    this.router.navigate(['']);
  }
}
