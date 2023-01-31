import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Offer } from 'src/app/model/offer';
import { OfferService } from 'src/app/services/offer.service';
import { environment } from 'src/environments/environment';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

@Component({
  selector: 'offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent implements OnInit {
  showOffers = environment.showOffers;
  offers: Offer[] = [];
  displayOffers: Offer[] = [];

  departments = [
    'Animacija u inženjerstvu',
    'Biomedicinsko inženjerstvo',
    'Energetika, elektronika i telekomunikacije',
    'Informacioni inženjering',
    'Mehatronika',
    'Primenjeno softversko inženjerstvo',
    'Računarstvo i automatika',
    'Softversko inženjerstvo i informacione tehnologije',
  ];

  searchValue = '';

  constructor(private router: Router, private offerService: OfferService) {}

  ngOnInit(): void {
    this.offerService.getAllOffers().subscribe((data) => {
      this.offers = this.offerService.convertDataToOffers(data);

      for (let i = 0; i < 5; i++) {
        this.offers.push(this.offers[0]);
        this.displayOffers = this.offers;
      }
    });
  }

  openHomepage() {
    this.router.navigate(['']);
  }
}
