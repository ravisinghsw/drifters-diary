import {Injectable, OnInit} from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {Article} from '../domain/Article';


@Injectable({
  providedIn: 'root'
})
export class ArticleService implements OnInit  {
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  }

  getArticle(): Article {
    return new Article();
  }

}
