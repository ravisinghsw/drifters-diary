import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../services/article.service';
import {Article} from '../domain/Article';
import {Author} from '../domain/Author';
import {ArticleDocument} from '../domain/ArticleDocument';
import {Paragraph} from '../domain/Paragraph';


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
    this.article.title = 'Grahan .. a hidden gem of Himachal Pradesh';
    const author = new Author();
    author.id = 1;
    author.name = 'Ravi Singh';
    this.article.author = author;
    this.article.createdTime = 'April 5, 2018 at 12:00 PM';
    this.article.articleImage = '../../assets/images/articles/grahan.jpg';
    this.article.articleBrief = 'How often do you get a chance to wake up to the chirping of birds and ' +
      'view of the giantic Himalayas ?\n' +
      '          Well , Let me take you to the Grahan , My last trekking destination to make that experience as feeling.';
    const articleDoc = new ArticleDocument();
    articleDoc.id = 1;
    const paragraphs: Paragraph[] = [];
    const paragaph1 = new Paragraph();
    paragaph1.paragraph = '"Life is not about the final moment but its about the journey we take to reach the destination".' +
      ' And I realized this when booked the bus ticket to Kullu from Delhi from March 30 ,2018';
    paragraphs.push(paragaph1);

    const paragaph2 = new Paragraph();
    paragaph2.paragraph = 'The HRTC bus departed at 7:00PM from Kashmiri Gate Bus Terminal adn that is when our jouyney to ' +
      'Grahan Village also began. The bus passed through major cities like Sonipat , Panipat ,Kurusheshtra and\n' +
      ' Karnal. After 13hours long journey we finally reached Bhuntar. From Bhuntar , we catched a local bus to Kasol ' +
      'at early in the morning at 6:30AM . Even though it was morning , but Bus was full packed with passengers.';
    paragaph2.imageUrl = '../../assets/images/articles/grahan.jpg';
    paragaph2.imageDestination = 'Bhuntar';
    paragraphs.push(paragaph2);

    const paragaph3 = new Paragraph();
    paragaph3.paragraph = 'We reached Kasol at 8:00PM. After getting fresh finally we fed ourself with maggi and some' +
      ' chocolates. And then our trek to Grahan village started.\n' +
      '        In front of us, there was a dense forest and above a giant rocky mountain. I felt like they were waiting' +
      ' for us to show their splendid beauty.';
    paragraphs.push(paragaph3);

    const paragaph4 = new Paragraph();
    paragaph4.paragraph = 'The trails were full of twist and turns . Sometimes it pases through the rocky hills where putting' +
      ' your foot on the right place itself was a big challenge and sometimes it passes\n' +
      '          along the tributires of Paravati river. The sound of the water in forest and hills was not less then any' +
      ' musical concert. We fed lot of splendid views of majestic Himalayas to our eyes. We reached\n' +
      '          Grahan around 2:30 PM.';
    paragraphs.push(paragaph4);

    const paragaph5 = new Paragraph();
    paragaph5.paragraph = 'First thing we did is we booked a home stay and given rest to our body. After two hours , we realize the ' +
      'place where we took rest was very different. There is no electricity in day time.\n' +
      '          and building were completely constructed with wood. They don\'t even had ceiling fan. We totally disconnected ' +
      'from the rest of world because there is not internet , mobile network and even electricity.\n' +
      '          The temprature changed dramatically at night. We felt like we entered in the month of december just after ' +
      'March. We stayed there for two days and witnessed the life of local people, the struggle they do for everything.';
    paragraphs.push(paragaph5);

    const paragaph6 = new Paragraph();
    paragaph6.paragraph = 'Trek to Grahan was truly a special journey. I took back lot of stories and beautiful memory of lovely' +
      ' people of Grahan.';
    paragraphs.push(paragaph6);


    articleDoc.paragraphs = paragraphs;
    this.article.articleDocument = articleDoc;


  }

  private getArticles() {
    this.article = this.articleService.getArticle();
  }
}
