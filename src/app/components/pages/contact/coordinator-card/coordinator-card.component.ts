import { Component, Input, OnInit } from '@angular/core';
import { Coordinator } from 'src/app/model/coordinator';

@Component({
  selector: 'coordinator-card',
  templateUrl: './coordinator-card.component.html',
  styleUrls: ['./coordinator-card.component.scss'],
})
export class CoordinatorCardComponent {
  @Input() coordinator: Coordinator = new Coordinator();

  constructor() {}

  redirectLinkedIn() {
    window.open(this.coordinator.linkedIn, '_blank');
  }
}
