import { Component, OnInit } from '@angular/core';
import {SEOServiceService} from '../services/seoservice.service';
import {Article} from '../domain/Article';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles: Article[] = [];
  articleGrahan: Article;
  articleRishikesh: Article;
  articleMassoori: Article;
  constructor(public seoService: SEOServiceService) {
    this.seoService.addMetaTags();
  }

  public ngOnInit() {
    this.articleGrahan = new Article();
    this.articleGrahan.title = 'Grahan Village..A Hidden Gem of Himachal Pradesh';
    this.articleGrahan.createdTime = 'Mar 31, 2018';
    this.articleGrahan.articleImage = '../../assets/images/articles/grahan.jpg';
    this.articleGrahan.articleBrief = 'How often do you get a chance to wake up to the chirping of birds and ' +
      'view of the giantic Himalayas ?\n' +
      '          Well , Let me take you to the Grahan , My last trekking destination to make that experience as feeling.';

    this.articleRishikesh = new Article();
    this.articleRishikesh.title = 'RishiKesh .. Why July is Best Time to Visit Rishikesh';
    this.articleRishikesh.createdTime = 'July 7, 2017';
    this.articleRishikesh.articleImage = '../../assets/images/articles/rishikesh.jpg';
    this.articleRishikesh.articleBrief = 'Probably you could have heard lot of triund' +
      ' or triund trek or triund weather but nowdays everyone is heading towards it';

    this.articleMassoori = new Article();
    this.articleMassoori.title = 'Masoori...Queen of Hills';
    this.articleMassoori.createdTime = 'Dec 31,2015';
    this.articleMassoori.articleImage = '../../assets/images/articles/masoori.jpg';
    this.articleMassoori.articleBrief = 'Probably you could have heard lot of triund' +
      ' or triund trek or triund weather but nowdays everyone is heading towards it';
    this.articles.push(this.articleGrahan);
    this.articles.push(this.articleMassoori);
    this.articles.push(this.articleRishikesh);
  }
}
