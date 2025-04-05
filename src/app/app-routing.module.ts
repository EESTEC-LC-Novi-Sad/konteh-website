import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutKontehComponent } from './components/pages/about-konteh/about-konteh.component';
import { ActivityPageComponent } from './components/pages/activity-page/activity-page.component';
import { CompaniesComponent } from './components/pages/companies/companies.component';
import { CompanyPageComponent } from './components/pages/company-page/company-page.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { OfferPageComponent } from './components/pages/offer-page/offer-page.component';
import { OffersComponent } from './components/pages/offers/offers.component';
import { ScheduleComponent } from './components/pages/schedule/schedule.component';
import { SponsorsComponent } from './components/pages/sponsors/sponsors.component';
import { ActivityListViewComponent } from './components/pages/activity-page/activity-list-view/activity-list-view.component';
import { SchedulePageComponent } from './components/pages/schedule/schedule-page/schedule-page.component';
import {MediaSponsorsComponent} from "./components/pages/media-sponsors/media-sponsors.component";

var baseTitle = 'KONTEH - ';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'o-konteh-u',
    component: AboutKontehComponent,
    title: baseTitle + 'O KONTEH-u',
  },
  {
    path: 'raspored',
    component: ScheduleComponent,
    title: baseTitle + 'Raspored',
  },
  {
    path: 'raspored/:id',
    component: SchedulePageComponent,
    title: baseTitle + 'Raspored',
  },
  {
    path: 'kontakt',
    component: ContactComponent,
    title: baseTitle + 'Kontakt',
  },
  {
    path: 'kompanija/:id',
    component: CompanyPageComponent,
    title: baseTitle + 'Kompanije',
  },
  {
    path: 'kompanije',
    component: CompaniesComponent,
    title: baseTitle + 'Kompanije',
  },
  {
    path: 'pokrovitelji',
    component: SponsorsComponent,
    title: baseTitle + 'Pokrovitelji',
  },
  {
    path: 'mediji',
    component: MediaSponsorsComponent,
    title: baseTitle + 'Mediji',
  },
  {
    path: 'oglas/:id',
    component: OfferPageComponent,
    title: baseTitle + 'Oglasi',
  },
  {
    path: 'oglasi',
    component: OffersComponent,
    title: baseTitle + 'Oglasi',
  },
  {
    path: 'aktivnost/:id',
    component: ActivityPageComponent,
    title: baseTitle + 'Aktivnost',
  },
  {
    path: 'aktivnosti',
    component: ActivityListViewComponent,
    title: baseTitle + 'Aktivnosti',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: baseTitle + '404',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
