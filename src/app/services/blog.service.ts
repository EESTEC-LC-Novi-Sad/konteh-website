import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BlogPost } from '../model/blogPost';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor() {}

  private client = createClient({
    space: environment.spaceId,
    accessToken: environment.accessToken,
  });

  getAllPosts() {
    const promise = this.client.getEntries();
    return from(promise);
  }

  convertDataToPosts(data: any): BlogPost[] {
    let retVal: BlogPost[] = [];
    for (let post of data.items) {
      let blogPost: BlogPost = new BlogPost();
      blogPost.content = post.fields.content;
      blogPost.title = post.fields.title;
      blogPost.featuredImage = post.fields.featuredImage;
      blogPost.dateCreated = post.fields.dateCreated;
      blogPost.gallery = post.fields.gallery;
      blogPost.tags = post.fields.tags;
      blogPost.youTubeEmbed = post.fields.youTubeEmbed;
      blogPost.urlHandle = post.sys.id;

      retVal.push(blogPost);
    }

    return retVal;
  }

  getPostById(id: string) {
    const promise = this.client.getEntry(id);
    return from(promise);
  }

  convertDataToPost(data: any): BlogPost {
    let blogPost: BlogPost = new BlogPost();

    blogPost.content = data.fields.content;
    blogPost.title = data.fields.title;
    blogPost.featuredImage = data.fields.featuredImage;
    blogPost.dateCreated = data.fields.dateCreated;
    blogPost.gallery = data.fields.gallery;
    blogPost.tags = data.fields.tags;
    blogPost.youTubeEmbed = data.fields.youTubeEmbed;
    blogPost.urlHandle = data.sys.id;

    return blogPost;
  }
}
