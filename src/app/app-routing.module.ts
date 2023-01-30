import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutKontehComponent } from './components/pages/about-konteh/about-konteh.component';
import { CompaniesComponent } from './components/pages/companies/companies.component';
import { CompanyPageComponent } from './components/pages/company-page/company-page.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { OfferPageComponent } from './components/pages/offer-page/offer-page.component';
import { OffersComponent } from './components/pages/offers/offers.component';
import { ScheduleComponent } from './components/pages/schedule/schedule.component';
import { SponsorsComponent } from './components/pages/sponsors/sponsors.component';

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
    path: 'ponuda/:id',
    component: OfferPageComponent,
    title: baseTitle + 'Ponude',
  },
  {
    path: 'ponude',
    component: OffersComponent,
    title: baseTitle + 'Ponude',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: baseTitle + '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
