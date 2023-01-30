import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MediaSponsor } from '../model/media-sponsor';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  constructor() {}

  private client = createClient({
    space: environment.spaceId,
    accessToken: environment.accessToken,
  });

  getAllMediaSponsors() {
    const promise = this.client.getEntries({
      content_type: 'kontehMediaSponsor',
    });
    return from(promise);
  }

  convertDataToMediaSponsors(data: any): MediaSponsor[] {
    let retVal: MediaSponsor[] = [];
    for (let item of data.items) {
      let sponsor: MediaSponsor = new MediaSponsor();
      sponsor.name = item.fields.name;
      sponsor.website = item.fields.website;
      sponsor.logo = item.fields.logo;
      retVal.push(sponsor);
    }

    return retVal;
  }
}
