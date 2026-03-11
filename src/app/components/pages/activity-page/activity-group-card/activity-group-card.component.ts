import { Component, Input } from '@angular/core';
import { ActivityGroup } from 'src/app/model/activity-group';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

@Component({
  selector: 'activity-group-card',
  templateUrl: './activity-group-card.component.html',
  styleUrls: ['./activity-group-card.component.scss']
})
export class ActivityGroupCardComponent {
  @Input() group!: ActivityGroup;
  @Input() index: number = 0;
  @Input() showNumber: boolean = true;

  renderDescription(description: any): string {
    if (!description) return '';
    if (typeof description === 'string') return description;
    try {
      return documentToHtmlString(description);
    } catch {
      return '';
    }
  }
}