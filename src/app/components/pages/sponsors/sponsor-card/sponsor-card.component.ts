import { Component, Input } from '@angular/core';

@Component({
  selector: 'sponsor-card',
  templateUrl: './sponsor-card.component.html',
  styleUrls: ['./sponsor-card.component.scss'],
})
export class SponsorCardComponent {
  @Input() sponsor: any = null;
}
