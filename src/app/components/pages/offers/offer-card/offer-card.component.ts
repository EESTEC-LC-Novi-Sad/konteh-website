import { Component, Input } from '@angular/core';
import { Offer } from 'src/app/model/offer';
import { Router } from '@angular/router';

@Component({
  selector: 'offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss'],
})
export class OfferCardComponent {
  @Input() offer: Offer = new Offer();

  constructor(private router: Router) {}

  openOffer() {
    this.router.navigate(['/ponuda/' + this.offer.id]);
  }
}
