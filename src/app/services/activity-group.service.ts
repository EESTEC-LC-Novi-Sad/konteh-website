import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';
import { ActivityGroup } from '../model/activity-group';

@Injectable({
  providedIn: 'root',
})
export class ActivityGroupService {
  constructor() {}

  private client = createClient({
    space: environment.spaceId,
    accessToken: environment.accessToken,
  });

  getAllActivityGroups() {
    const promise = this.client.getEntries({
      content_type: 'kontehactivitygroup',
    });
    return from(promise);
  }

  getById(id: string) {
    const promise = this.client.getEntry(id, { include: 2 });
    return from(promise);
  }

  convertDataToActivityGroup(item: any): ActivityGroup {
    let activityGroup: ActivityGroup = new ActivityGroup();
    activityGroup.id = item.sys.id;
    activityGroup.name = item.fields.name;
    activityGroup.type = item.fields.type;
    activityGroup.activity = item.fields.activity ?? [];
    activityGroup.description = item.fields.description ?? '';
    return activityGroup;
  }

  convertDataToActivityGroups(data: any): ActivityGroup[] {
    let retVal: ActivityGroup[] = [];
    for (let item of data.items) {
      retVal.push(this.convertDataToActivityGroup(item));
    }
    return retVal;
  }
}