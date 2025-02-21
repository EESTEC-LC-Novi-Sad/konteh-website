import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import {MatDialog} from "@angular/material/dialog";
import lgZoom from "lightgallery/plugins/zoom";
import {PolicyComponent} from "../about-konteh/policy/policy.component";

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  settings = {
    counter: false,
    plugins: [lgZoom],
  };

  showOffers = environment.showOffers;

  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {}

  redirectToWebsite(url: string): void {
    console.log('Redirecting to website...');
    window.open(url, '_blank');
  }

  route(page: string): void {
    this.router.navigate([page]);
  }

  openHomepage() {
    this.router.navigate(['']);
  }

  openPolicy() {
    this.dialog.open(PolicyComponent);
  }

}
