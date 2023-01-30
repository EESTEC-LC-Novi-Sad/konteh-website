import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Offer } from '../model/offer';

@Injectable({
  providedIn: 'root',
})
export class OfferService {
  constructor() {}

  private client = createClient({
    space: environment.spaceId,
    accessToken: environment.accessToken,
  });

  getAllOffers() {
    const promise = this.client.getEntries({
      content_type: 'kontehOffer',
    });
    return from(promise);
  }

  convertDataToOffers(data: any): Offer[] {
    let retVal: Offer[] = [];
    for (let item of data.items) {
      let offer: Offer = new Offer();
      offer.company = item.fields.company;
      offer.offerType = item.fields.offerType;
      offer.positionName = item.fields.positionName;
      offer.positionDescription = item.fields.positionDescription;
      offer.requiredKnowledge = item.fields.requiredKnowledge;
      offer.startingTime = item.fields.startingTime;
      offer.workingHours = item.fields.workingHours;
      offer.tags = item.fields.tags;
      offer.uniDepartments = item.fields.uniDepartments;
      offer.picture = item.fields.picture;
      offer.callToActionUrl = item.fields.callToActionUrl;
      offer.howToapply = item.fields.howToapply;
      retVal.push(offer);
    }

    return retVal;
  }
}
