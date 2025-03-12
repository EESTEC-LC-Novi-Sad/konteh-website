import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';
import { AboutKontehComponent } from './components/pages/about-konteh/about-konteh.component';
import { ScheduleComponent } from './components/pages/schedule/schedule.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { SponsorsComponent } from './components/pages/sponsors/sponsors.component';
import { CompaniesComponent } from './components/pages/companies/companies.component';
import { CompanyPageComponent } from './components/pages/company-page/company-page.component';
import { FeatureCardComponent } from './components/pages/landing-page/feature-card/feature-card.component';
import { SimpleFeatureComponent } from './components/pages/landing-page/simple-feature/simple-feature.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { TestimonialCardComponent } from './components/pages/landing-page/testimonial-card/testimonial-card.component';
import { SquareImageComponent } from './components/pages/about-konteh/square-image/square-image.component';
import { PhotoLightboxComponent } from './components/pages/about-konteh/photo-lightbox/photo-lightbox.component';
import { CoordinatorCardComponent } from './components/pages/contact/coordinator-card/coordinator-card.component';
import { PolicyComponent } from './components/pages/about-konteh/policy/policy.component';
import { OffersComponent } from './components/pages/offers/offers.component';
import { OfferPageComponent } from './components/pages/offer-page/offer-page.component';
import { OfferCardComponent } from './components/pages/offers/offer-card/offer-card.component';
import { PlatinumCompanyCardComponent } from './components/pages/companies/platinum-company-card/platinum-company-card.component';
import { ExclusiveCompanyCardComponent } from './components/pages/companies/exclusive-company-card/exclusive-company-card.component';
import { GoldCompanyCardComponent } from './components/pages/companies/gold-company-card/gold-company-card.component';
import { SilverCompanyCardComponent } from './components/pages/companies/silver-company-card/silver-company-card.component';
import { LightgalleryModule } from 'lightgallery/angular';
import { BronzeCompanyCardComponent } from './components/pages/companies/bronze-company-card/bronze-company-card.component';
import { SponsorCardComponent } from './components/pages/sponsors/sponsor-card/sponsor-card.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ActivityCardComponent } from './components/pages/activity-page/activity-card/activity-card.component';
import { ActivityPageComponent } from './components/pages/activity-page/activity-page.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ActivityListViewComponent } from './components/pages/activity-page/activity-list-view/activity-list-view.component';
import { ScheduleCardComponent } from './components/pages/schedule/schedule-card/schedule-card.component';
import { SchedulePageComponent } from './components/pages/schedule/schedule-page/schedule-page.component';
import { LecturerCardComponent } from './components/pages/schedule/lecturer-card/lecturer-card.component';
import { DiamondCompanyCardComponent } from './components/pages/companies/diamond-company-card/diamond-company-card.component';
import { MediaSponsorsComponent } from './components/pages/media-sponsors/media-sponsors.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    AboutKontehComponent,
    ScheduleComponent,
    ContactComponent,
    SponsorsComponent,
    CompaniesComponent,
    CompanyPageComponent,
    FeatureCardComponent,
    SimpleFeatureComponent,
    NotFoundComponent,
    TestimonialCardComponent,
    SquareImageComponent,
    PhotoLightboxComponent,
    CoordinatorCardComponent,
    PolicyComponent,
    OffersComponent,
    OfferPageComponent,
    OfferCardComponent,
    PlatinumCompanyCardComponent,
    ExclusiveCompanyCardComponent,
    GoldCompanyCardComponent,
    SilverCompanyCardComponent,
    BronzeCompanyCardComponent,
    SponsorCardComponent,
    ActivityCardComponent,
    ActivityPageComponent,
    ActivityListViewComponent,
    ScheduleCardComponent,
    SchedulePageComponent,
    LecturerCardComponent,
    DiamondCompanyCardComponent,
    MediaSponsorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    LightgalleryModule,
    YouTubePlayerModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
