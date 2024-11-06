import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  openFacebook() {
    window.open('https://www.facebook.com/konteh.eestec/', '_blank');
  }

  openInstagram() {
    window.open('https://www.instagram.com/konteh_sajam', '_blank');
  }

  openLinkedin() {
    window.open('https://www.linkedin.com/company/konteh', '_blank');
  }

  openEestec() {
    window.open('https://www.eestecns.org', '_blank');
  }
}
