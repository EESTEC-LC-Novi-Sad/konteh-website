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
