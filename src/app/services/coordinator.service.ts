import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';
import { Coordinator } from '../model/coordinator';

@Injectable({
  providedIn: 'root',
})
export class CoordinatorService {
  constructor() {}

  private client = createClient({
    space: environment.spaceId,
    accessToken: environment.accessToken,
  });

  getAllCoordinators() {
    const promise = this.client.getEntries({
      content_type: 'kontehCoordinator',
    });
    return from(promise);
  }

  convertDataToCoordinators(data: any): Coordinator[] {
    let retVal: Coordinator[] = [];
    for (let post of data.items) {
      let blogPost: Coordinator = new Coordinator();
      blogPost.name = post.fields.name;
      blogPost.position = post.fields.position;
      blogPost.picture = post.fields.picture;
      blogPost.linkedIn = post.fields.linkedIn;
      blogPost.email = post.fields.email;
      retVal.push(blogPost);
    }

    return retVal;
  }
}
