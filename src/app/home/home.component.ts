import { Component, OnInit } from '@angular/core';
import {SEOServiceService} from '../services/seoservice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public seoService: SEOServiceService) {
    this.seoService.addMetaTags();
  }

  public ngOnInit() {

  }
}
