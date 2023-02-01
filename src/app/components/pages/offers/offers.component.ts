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
  ITEMS_PER_PAGE = 10;

  showOffers = environment.showOffers;
  offers: Offer[] = [];
  filteredOffers: Offer[] = [];
  displayOffers: Offer[] = [];

  maxPages = 1;
  currentPage = 0;
  loading = true;

  departments = [
    'E1',
    'E2',
    'E3',
    'Biomedicinsko inž.',
    'Informacioni inž.',
    'Mehatronika',
    'Softversko inž. i inf. tehnologije',
    'Inženjerstvo inf. sistema',
    'Inž. menadžment',
    'Animacija u inženjerstvu',
    'GRID',
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

      for (let i = 0; i < 20; i++) {
        let o = Object.assign({}, this.offers[0]);

        o.positionName = i.toString();
        this.offers.push(o);
      }

      this.maxPages = Math.floor(this.offers.length / this.ITEMS_PER_PAGE) + 1;
      if (this.offers.length % this.ITEMS_PER_PAGE == 0) {
        this.maxPages = this.maxPages - 1;
      }

      this.filteredOffers = this.offers;
      this.refreshDisplayedItems();
    });

    this.loading = false;
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
    this.loading = true;
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

    this.currentPage = 0;
    this.refreshDisplayedItems();

    this.loading = false;
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

    this.currentPage = 0;
    this.refreshDisplayedItems();
  }

  nextPage() {
    if (this.currentPage + 1 <= this.maxPages) {
      this.currentPage = this.currentPage + 1;
      this.refreshDisplayedItems();
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  }

  prevPage() {
    if (this.currentPage - 1 >= 0) {
      this.currentPage = this.currentPage - 1;
      this.refreshDisplayedItems();
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  }

  refreshDisplayedItems() {
    this.displayOffers = this.filteredOffers.slice(
      this.ITEMS_PER_PAGE * this.currentPage,
      this.ITEMS_PER_PAGE * (this.currentPage + 1)
    );

    console.log(this.ITEMS_PER_PAGE * this.currentPage);
    console.log(this.ITEMS_PER_PAGE * (this.currentPage + 1));
  }
}
