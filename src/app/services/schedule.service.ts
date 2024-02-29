import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';
import { Schedule } from '../model/schedule';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  constructor() {}

  private client = createClient({
    space: environment.spaceId,
    accessToken: environment.accessToken,
  });

  getAllSchedule() {
    const promise = this.client.getEntries({
      content_type: 'kontehSchedule',
    });
    return from(promise);
  }

  convertDataToSchedules(data: any): Schedule[] {
    let today = new Date();
    let retVal: Schedule[] = [];
    for (let item of data.items) {
      let schedule: Schedule = new Schedule();
      schedule.id = item.sys.id;
      schedule.title = item.fields.title;
      schedule.location = item.fields.location;
      schedule.startTime = item.fields.startTime;
      schedule.endTime = item.fields.endTime;
      schedule.image = item.fields.image?.fields.file.url;
      schedule.content = item.fields.content;
      schedule.lecturers = item.fields.lecturers;
      schedule.type = item.fields.type;
      schedule.company = item.fields.company;
      schedule.track = item.fields.track;
      if(new Date(schedule.startTime) > today){
        retVal.push(schedule);
      }
    }

    return retVal;
  }
}
