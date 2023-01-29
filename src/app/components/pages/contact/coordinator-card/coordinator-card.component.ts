import { Component, Input, OnInit } from '@angular/core';
import { Coordinator } from 'src/app/model/coordinator';

@Component({
  selector: 'coordinator-card',
  templateUrl: './coordinator-card.component.html',
  styleUrls: ['./coordinator-card.component.scss'],
})
export class CoordinatorCardComponent implements OnInit {
  @Input() coordinator: Coordinator = new Coordinator();
  linkedIn = true;

  constructor() {}

  ngOnInit(): void {
    if (this.coordinator.linkedIn.length == 0) {
      this.linkedIn = false;
    }
  }

  redirectLinkedIn() {
    window.open(this.coordinator.linkedIn, '_blank');
  }
}
