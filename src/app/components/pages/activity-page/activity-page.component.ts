import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Activity } from 'src/app/model/activity';
import { ActivityService } from 'src/app/services/activity.service';
import { activities } from './activities';

@Component({
  selector: 'activity-page',
  templateUrl: './activity-page.component.html',
  styleUrls: ['./activity-page.component.scss'],
})
export class ActivityPageComponent {
  activity: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private activityService: ActivityService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];

      this.activity = activities.find((activity) => activity.id == id);
    });
  }

  redirect(): void {
    switch (this.activity.id) {
      case 1:
        window.open("", '_blank');
        break;
      case 2:
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSdbnYJteDXdqXUEK9Cr7QhB8y4mxBgNFv-Bqja4XNu-RjExgQ/viewform", '_blank');
        break;
      case 3:
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSdI_vOlWeS30PQd_h1OgOhf3iqab_26lCHQNdGtZAfeDEyl0g/viewform", '_blank');
        break;
      case 6:
        window.open("https://docs.google.com/forms/d/e/1FAIpQLScF6uXtiTy4SvUtjF9HiyCjDSwMznakbsNuXfRmjbxiz67rRw/viewform", '_blank');
        break;
    }
  }
}
