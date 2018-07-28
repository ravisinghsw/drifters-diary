import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class SEOServiceService {

  constructor(public meta: Meta) {
    meta.addTag({name: 'description', content: 'Title and Meta tags examples'}, true);
    this.meta.addTags([
      {name: 'robots', content: 'INDEX, FOLLOW'},
      {name: 'author', content: 'Ravi Singh'},
      {name: 'keywords', content: 'Travel, Tour , Trek'},
    ], true);
  }

  addMetaTags() {
    this.meta.addTags([
      {name: 'robots', content: 'INDEX, FOLLOW'},
      {name: 'author', content: 'Ravi Singh'},
      {name: 'keywords', content: 'Travel, Tour , Trek'},
    ], true);
  }
}
