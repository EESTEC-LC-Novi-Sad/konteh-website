import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(private router: Router) {}

  openHomepage() {
    this.router.navigate(['']);
  }
}
