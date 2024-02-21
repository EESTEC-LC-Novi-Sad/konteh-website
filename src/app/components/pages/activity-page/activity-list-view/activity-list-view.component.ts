import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from 'src/app/model/activity';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'activity-list-view',
  templateUrl: './activity-list-view.component.html',
  styleUrls: ['./activity-list-view.component.scss']
})
export class ActivityListViewComponent {

  activities = [
    {id: 1, name: "Panel diskusija", location: "NTP", date: "2021-03-06", photo: "assets/panelDisc.png"},
    {id: 2, name: "Predavanja", location: "NTP", date: "2021-03-08", photo: "assets/panelDisc.png"},
    {id: 3, name: "Studija slučaja", location: "NTP", date: "2021-03-09", photo: "assets/studSluc.png"},
];

  activityLoading: boolean = true;

  constructor(
    private router: Router,) { }

  ngOnInit(): void {
    this.activityLoading = false;
  }

  openHomepage() {
    this.router.navigate(['']);
  }
}
