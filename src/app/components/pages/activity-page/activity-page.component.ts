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
  activity: Activity = new Activity();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private activityService: ActivityService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];

      this.activityService.getById(id).subscribe(
        (data) => {
          this.activity = this.activityService.convertDataToActivity(data);
          this.titleService.setTitle('KONTEH - ' + this.activity.name);
        },
        (err) => {
          this.router.navigate(['/404']);
        }
      );
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
