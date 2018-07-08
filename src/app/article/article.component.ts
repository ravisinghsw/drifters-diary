import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../services/article.service';
import {Article} from './article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles: Article[] ;
  title: string;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getArticles();
    this.title = 'Grahan Village';
  }

  private getArticles() {
    this.articles = this.articleService.getArticles();
  }
}
