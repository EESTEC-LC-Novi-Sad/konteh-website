import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {
  constructor(private router: Router) {}

  openHomepage() {
    this.router.navigate(['']);
  }
}
