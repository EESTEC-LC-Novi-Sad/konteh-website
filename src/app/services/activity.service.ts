import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';
import { Activity } from '../model/activity';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  constructor() {}

  private client = createClient({
    space: environment.spaceId,
    accessToken: environment.accessToken,
  });

  getAllActivities() {
    const promise = this.client.getEntries({
      content_type: 'kontehActivity',
    });
    return from(promise);
  }

  getById(id: string) {
    const promise = this.client.getEntry(id);
    return from(promise);
  }

  convertDataToActivity(item: any): Activity {
    let activity: Activity = new Activity();
    activity.id = item.sys.id;
    activity.company = item.fields.company;
    activity.name = item.fields.name;
    activity.type = item.fields.type;
    activity.location = item.fields.location;
    activity.description = item.fields.description;
    activity.photo = item.fields.photo;
    activity.date = item.fields.date;
    activity.visibleUntil = item.fields.visibleUntil;
    return activity;
  }

  convertDataToActivities(data: any): Activity[] {
    let today = new Date();
    let retVal: Activity[] = [];
    for (let item of data.items) {
      let activity: Activity = new Activity();
      activity.id = item.sys.id;
      activity.company = item.fields.company;
      activity.name = item.fields.name;
      activity.type = item.fields.type;
      activity.location = item.fields.location;
      activity.description = item.fields.description;
      activity.photo = item.fields.photo;
      activity.date = item.fields.date;
      activity.visibleUntil = item.fields.visibleUntil;

      // if (today < activity.visibleUntil) {
      retVal.push(activity);
      //   }
    }

    return retVal;
  }
}
