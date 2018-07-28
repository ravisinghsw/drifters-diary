import {Component, OnInit} from '@angular/core';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';
import {SEOServiceService} from './services/seoservice.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Drifters Diaries';
  constructor(public seoService: SEOServiceService) {
    this.seoService.addMetaTags();
  }
  public ngOnInit() {

  }
}
