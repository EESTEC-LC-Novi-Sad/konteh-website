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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MaterialModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
