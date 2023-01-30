import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';
import { MerchSponsor } from '../model/merch-sponsor';

@Injectable({
  providedIn: 'root',
})
export class MerchService {
  constructor() {}

  private client = createClient({
    space: environment.spaceId,
    accessToken: environment.accessToken,
  });

  getAllMerchSponsors() {
    const promise = this.client.getEntries({
      content_type: 'kontehMerchSponsor',
    });
    return from(promise);
  }

  convertDataToMerchSponsors(data: any): MerchSponsor[] {
    let retVal: MerchSponsor[] = [];
    for (let item of data.items) {
      let sponsor: MerchSponsor = new MerchSponsor();
      sponsor.name = item.fields.name;
      sponsor.website = item.fields.website;
      sponsor.logo = item.fields.logo;
      retVal.push(sponsor);
    }

    return retVal;
  }
}
