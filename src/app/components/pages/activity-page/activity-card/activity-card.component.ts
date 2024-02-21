import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from 'src/app/model/activity';

@Component({
  selector: 'activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.scss'],
})
export class ActivityCardComponent {
  @Input() activity: any;

  constructor(private router: Router) {}

  openActivity() {
    this.router.navigate(['/aktivnost/' + this.activity.id]);
  }
}
