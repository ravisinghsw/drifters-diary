///<reference path="../../node_modules/@angular/router/src/config.d.ts"/>
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent} from './app.component';
import { HomeComponent} from './home/home.component';
import { ArticleComponent} from './article/article.component';
import {TreksComponent} from './treks/treks.component';
import {ArticlesComponent} from './articles/articles.component';
import {ReviewsComponent} from './reviews/reviews.component';
import {HelplineComponent} from './helpline/helpline.component';
import {ContributeComponent} from './contribute/contribute.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'articles', component: ArticlesComponent },
  { path: 'treks', component: TreksComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'helpline', component: HelplineComponent },
  { path: 'contribute', component: ContributeComponent },
  { path: 'articles/grahan', component: ArticleComponent },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
