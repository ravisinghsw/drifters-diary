import {Injectable, OnInit} from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {Article} from '../article/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService implements OnInit  {
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  }

  getArticles(): Article[] {
    return [
      new Article(1, 'Grahan Village Service', 'img src', 'description ')
    ];
  }
}
