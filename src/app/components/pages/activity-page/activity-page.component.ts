import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Activity } from 'src/app/model/activity';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'activity-page',
  templateUrl: './activity-page.component.html',
  styleUrls: ['./activity-page.component.scss'],
})
export class ActivityPageComponent {
  activity: any;

  activities = [
    {id: 1, name: "Panel diskusija", location: "NTP", date: "2021-03-06", photo: "assets/panelDisc.png"},
    {id: 2, name: "Predavanja", location: "NTP", date: "2021-03-08", photo: "assets/panelDisc.png"},
    {id: 3, name: "Studija slučaja", location: "NTP", date: "2021-03-09", photo: "assets/studSluc.png"},
];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private activityService: ActivityService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];

      this.activity = this.activities.find((activity) => activity.id == id);
    });
  }

  returnHtmlFromRichText(richText: any) {
    if (
      richText === undefined ||
      richText === null ||
      richText.nodeType !== 'document'
    ) {
      return '<p>Error</p>';
    }
    return documentToHtmlString(richText);
  }
}
