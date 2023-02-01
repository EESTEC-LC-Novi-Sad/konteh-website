import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Offer } from 'src/app/model/offer';
import { OfferService } from 'src/app/services/offer.service';
import { environment } from 'src/environments/environment';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent implements OnInit {
  showOffers = environment.showOffers;
  offers: Offer[] = [];
  filteredOffers: Offer[] = [];
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
    'Grafičko inženjerstvo i dizajn',
    'Inženjerstvo informacionih sistema',
  ];

  offerType = '';
  searchValue = '';
  selectedJob = false;
  selectedPaidInternship = false;
  selectedUnpaidInternship = false;
  selectedDepartments: any[] = [];

  constructor(private router: Router, private offerService: OfferService) {}

  ngOnInit(): void {
    this.resetDepartments();
    this.offerService.getAllOffers().subscribe((data) => {
      this.offers = this.offerService.convertDataToOffers(data);

      for (let i = 0; i < 5; i++) {
        this.offers.push(this.offers[0]);
        this.filteredOffers = this.offers;
        this.displayOffers = this.offers;
      }
    });
  }

  resetDepartments() {
    this.selectedDepartments = [];
    for (let dep of this.departments) {
      this.selectedDepartments.push({
        name: dep,
        selected: false,
      });
    }
  }

  openHomepage() {
    this.router.navigate(['']);
  }

  search() {
    this.selectedJob = this.offerType.includes('Posao');
    this.selectedPaidInternship = this.offerType.includes('Placena praksa');
    this.selectedUnpaidInternship = this.offerType.includes('Neplacena praksa');

    this.filteredOffers = [];

    // Filter by offer type
    this.filteredOffers = this.offers.filter((o) => {
      if (
        this.selectedJob ||
        this.selectedPaidInternship ||
        this.selectedUnpaidInternship
      ) {
        if (this.selectedJob && o.offerType == 'Juniorska pozicija') {
          return true;
        } else if (
          this.selectedPaidInternship &&
          o.offerType == 'Plaćena praksa'
        ) {
          return true;
        } else if (
          this.selectedUnpaidInternship &&
          o.offerType == 'Neplaćena praksa'
        ) {
          return true;
        } else return false;
      } else {
        return true;
      }
    });

    // Filter by department
    this.filteredOffers = this.filteredOffers.filter((o) => {
      let anySelected = false;
      if (this.selectedDepartments.some((item) => item.selected == true)) {
        return this.selectedDepartments.some((item) => {
          return o.uniDepartments.includes(item.name) && item.selected;
        });
      } else {
        return true;
      }
    });

    // Filter by search field
    this.filteredOffers = this.filteredOffers.filter((o) => {
      let offerText: string =
        o.positionName + o.company.fields.name + o.location;

      for (let tag of o.tags) {
        offerText = offerText + tag;
      }

      offerText = offerText.toLowerCase().replace(/ /g, '').trim();

      let filterText = this.searchValue.toLowerCase().replace(/ /g, '').trim();

      console.log(filterText);
      console.log(offerText);

      return offerText.includes(filterText);
    });
  }

  cancelSearch() {
    this.searchValue = '';
    this.offerType = '';
    this.selectedJob = false;
    this.selectedPaidInternship = false;
    this.selectedUnpaidInternship = false;
    this.resetDepartments();

    this.filteredOffers = this.offers;
    this.displayOffers = this.offers;
  }
}
