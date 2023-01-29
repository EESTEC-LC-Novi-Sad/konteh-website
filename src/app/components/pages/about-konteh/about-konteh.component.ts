import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PolicyComponent } from './policy/policy.component';

@Component({
  selector: 'about-konteh',
  templateUrl: './about-konteh.component.html',
  styleUrls: ['./about-konteh.component.scss'],
})
export class AboutKontehComponent {
  constructor(private router: Router, public dialog: MatDialog) {}

  openHomepage() {
    this.router.navigate(['']);
  }

  openPolicy() {
    this.dialog.open(PolicyComponent);
  }
}
