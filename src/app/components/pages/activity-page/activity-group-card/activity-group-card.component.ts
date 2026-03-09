import { Component, Input } from '@angular/core';
import { ActivityGroup } from 'src/app/model/activity-group';

@Component({
  selector: 'activity-group-card',
  templateUrl: './activity-group-card.component.html',
  styleUrls: ['./activity-group-card.component.scss']
})
export class ActivityGroupCardComponent {
  @Input() group!: ActivityGroup;
  @Input() index: number = 0;
  @Input() showNumber: boolean = true;
}