import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/model/company';
import { CompanyService } from 'src/app/services/company.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent implements OnInit, AfterViewInit {
@ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    const video = this.bgVideo.nativeElement;

    video.muted = true; // Critical in some browsers
    video.setAttribute('playsinline', 'true');
    video.setAttribute('muted', 'true'); // also attribute
    video.setAttribute('autoplay', 'true'); // safety net

    video.load(); // reinitialize

    video.play().then(() => {
      console.log('Video autoplayed');
    }).catch(err => {
      console.warn('Autoplay blocked, waiting for user interaction:', err);
      this.setupFallbackAutoplay(video);
    });
  }
  setupFallbackAutoplay(video: HTMLVideoElement) {
    const tryPlay = () => {
      video.play().catch(err => console.warn('Still failed to play:', err));
      document.removeEventListener('click', tryPlay);
    };

    document.addEventListener('click', tryPlay);
  }


  showCompanies = environment.showCompanies;

  companies: Company[] = [];
  exclusiveCompany = new Company();
  diamondCompanies: Company[] = [];
  platinumCompanies: Company[] = [];
  goldCompanies: Company[] = [];
  silverCompanies: Company[] = [];
  bronzeCompanies: Company[] = [];

  constructor(private router: Router, private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getAllCompanies().subscribe((data) => {
      this.companies = this.companyService.convertDataToCompanies(data);
      this.companies.sort((a,b) => {
        return a.name.localeCompare(b.name);
      });

      for (let company of this.companies) {
        if (company.tier == 'Ekskluzivni') {
          this.exclusiveCompany = company;
        }else if(company.tier == 'Dijamant'){
          this.diamondCompanies.push(company);
        } else if (company.tier == 'Platinum') {
          this.platinumCompanies.push(company);
        } else if (company.tier == 'Zlatni') {
          this.goldCompanies.push(company);
        } else if (company.tier == 'Srebrni') {
          this.silverCompanies.push(company);
        } else if (company.tier == 'Bronzani') {
          this.bronzeCompanies.push(company);
        }
      }
    });
  }

  openHomepage() {
    this.router.navigate(['']);
  }
}
