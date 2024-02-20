import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Schedule } from 'src/app/model/schedule';

@Component({
  selector: 'schedule-card',
  templateUrl: './schedule-card.component.html',
  styleUrls: ['./schedule-card.component.scss']
})
export class ScheduleCardComponent {

  @Input() schedule: Schedule = new Schedule();

  constructor(private router: Router) { }

}
