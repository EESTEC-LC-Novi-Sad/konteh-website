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

  getById(id: string) {
    const promise = this.client.getEntry(id);
    return from(promise);
  }

  convertDataToOffer(item: any): Offer {
    let offer: Offer = new Offer();
    offer.company = item.fields.company;
    offer.id = item.sys.id;
    offer.offerType = item.fields.offerType;
    offer.positionName = item.fields.positionName;
    offer.location = item.fields.location;
    offer.remoteOption = item.fields.remoteOption;
    offer.positionDescription = item.fields.positionDescription;
    offer.requiredKnowledge = item.fields.requiredKnowledge;
    offer.startingTime = item.fields.startingTime;
    offer.workingHours = item.fields.workHours;
    offer.tags = item.fields.tags;
    offer.uniDepartments = item.fields.uniDepartments;
    offer.picture = item.fields.picture;
    offer.callToActionUrl = item.fields.callToActionUrl;
    offer.howToApply = item.fields.howToApply;
    offer.visibleUntil = item.fields.visibleUntil;
    return offer;
  }

  convertDataToOffers(data: any): Offer[] {
    let today = new Date();
    let retVal: Offer[] = [];
    for (let item of data.items) {
      let offer: Offer = new Offer();
      offer.company = item.fields.company;
      offer.id = item.sys.id;
      offer.offerType = item.fields.offerType;
      offer.positionName = item.fields.positionName;
      offer.location = item.fields.location;
      offer.remoteOption = item.fields.remoteOption;
      offer.positionDescription = item.fields.positionDescription;
      offer.requiredKnowledge = item.fields.requiredKnowledge;
      offer.startingTime = item.fields.startingTime;
      offer.workingHours = item.fields.workHours;
      offer.tags = item.fields.tags;
      offer.uniDepartments = item.fields.uniDepartments;
      offer.picture = item.fields.picture;
      offer.callToActionUrl = item.fields.callToActionUrl;
      offer.howToApply = item.fields.howToApply;
      offer.visibleUntil = new Date(item.fields.visibleUntil);

      retVal.push(offer);
      /**if (today < offer.visibleUntil) {
        retVal.push(offer);
      }**/
    }

    return retVal;
  }
}
