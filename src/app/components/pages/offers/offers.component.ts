import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent {
  showOffers = environment.showOffers;

  constructor(private router: Router) {}

  openHomepage() {
    this.router.navigate(['']);
  }
}
