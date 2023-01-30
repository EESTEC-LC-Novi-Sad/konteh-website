import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coordinator } from 'src/app/model/coordinator';
import { CoordinatorService } from 'src/app/services/coordinator.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  coordinators: Coordinator[] = [];

  constructor(
    private router: Router,
    private coordinatorService: CoordinatorService
  ) {}

  ngOnInit(): void {
    this.coordinatorService.getAllCoordinators().subscribe((data) => {
      if (data != null) {
        let coordinators: Coordinator[] = [];
        coordinators = this.coordinatorService.convertDataToCoordinators(data);

        this.coordinators = coordinators.sort((a, b) => {
          if (a.position == 'Glavni organizator') {
            return -1;
          } else if (a.position == 'Koordinator za odnose sa kompanijama') {
            return -1;
          } else {
            return 1;
          }
        });
      }
    });
  }

  openMail() {
    window.open('mailto:konteh@eestecns.org', '_blank');
  }
}
