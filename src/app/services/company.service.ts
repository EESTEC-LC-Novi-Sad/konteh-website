import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company } from 'src/app/model/company';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor() {}

  private client = createClient({
    space: environment.spaceId,
    accessToken: environment.accessToken,
  });

  getAllCompanies() {
    const promise = this.client.getEntries({
      content_type: 'konthCompany',
    });
    return from(promise);
  }

  getById(id: string) {
    const promise = this.client.getEntry(id);
    return from(promise);
  }

  convertDataToCompany(item: any): Company {
    let company: Company = new Company();
    company.id = item.sys.id;
    company.name = item.fields.name;
    company.website = item.fields.website;
    company.logo = item.fields.logo;
    company.technologies = item.fields.technologies;
    company.description = item.fields.description;
    company.studentOpportunities = item.fields.studentOpportunities;
    company.gallery = item.fields.gallery;
    company.tier = item.fields.tier;
    company.linkedInUrl = item.fields.linkedInUrl;
    company.instagramUrl = item.fields.instagramUrl;
    company.facebookUrl = item.fields.facebookUrl;
    company.youtubeUrl = item.fields.youtubeUrl;
    return company;
  }

  convertDataToCompanies(data: any): Company[] {
    let retVal: Company[] = [];
    for (let item of data.items) {
      let company: Company = new Company();
      company.id = item.sys.id;
      company.name = item.fields.name;
      company.website = item.fields.website;
      company.logo = item.fields.logo;
      company.technologies = item.fields.technologies;
      company.description = item.fields.description;
      company.studentOpportunities = item.fields.studentOpportunities;
      company.gallery = item.fields.gallery;
      company.tier = item.fields.tier;
      company.linkedInUrl = item.fields.linkedInUrl;
      company.instagramUrl = item.fields.instagramUrl;
      company.facebookUrl = item.fields.facebookUrl;
      company.youtubeUrl = item.fields.youtubeUrl;
      retVal.push(company);
    }

    return retVal;
  }
}
