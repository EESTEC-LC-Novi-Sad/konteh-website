import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ParnerSponsor } from '../model/partner-sponsor';

@Injectable({
  providedIn: 'root',
})
export class PartnerService {
  constructor() {}

  private client = createClient({
    space: environment.spaceId,
    accessToken: environment.accessToken,
  });

  getAllPartnerSponsors() {
    const promise = this.client.getEntries({
      content_type: 'kontehParner',
    });
    return from(promise);
  }

  convertDataToPartnerSponsors(data: any): ParnerSponsor[] {
    let retVal: ParnerSponsor[] = [];
    for (let item of data.items) {
      let sponsor: ParnerSponsor = new ParnerSponsor();
      sponsor.name = item.fields.name;
      sponsor.website = item.fields.website;
      sponsor.logo = item.fields.logo;
      retVal.push(sponsor);
    }

    return retVal;
  }
}
