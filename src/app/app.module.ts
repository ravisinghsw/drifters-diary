import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactComponent } from './contact/contact.component';
import { ArticleComponent } from './article/article.component';
import { AddsAndEventsComponent } from './adds-and-events/adds-and-events.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';
import { TreksComponent } from './treks/treks.component';
import { ArticlesComponent } from './articles/articles.component';
import { ContributeComponent } from './contribute/contribute.component';
import { HelplineComponent } from './helpline/helpline.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReactiveFormsModule } from '@angular/forms';
import {SocialMediaCSS} from './utility/SocialMediaCSS';
import {SEOServiceService} from './services/seoservice.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    CarouselComponent,
    ContactComponent,
    ArticleComponent,
    AddsAndEventsComponent,
    HomeComponent,
    TreksComponent,
    ArticlesComponent,
    ContributeComponent,
    HelplineComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'driftersdiaries' }),
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    LazyLoadImagesModule,
    ReactiveFormsModule
  ],
  providers: [SocialMediaCSS, SEOServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
