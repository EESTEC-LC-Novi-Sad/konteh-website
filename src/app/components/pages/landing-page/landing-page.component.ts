import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPost } from 'src/app/model/blogPost';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  openLink(url: string) {
    window.open(url, '_blank');
  }

  openSchedule() {
    this.router.navigate(['/raspored']);
  }

  openCompanies() {
    this.router.navigate(['/pokrovitelji']);
  }
}
