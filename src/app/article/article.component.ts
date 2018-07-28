import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../services/article.service';
import {Article} from '../domain/Article';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article ;
  title: string;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getArticles();
    this.title = 'Grahan Village';
  }

  private getArticles() {
    this.article = this.articleService.getArticle();
  }
}
