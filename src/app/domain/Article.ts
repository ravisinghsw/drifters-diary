import {Author} from './Author';
import {Destination} from './Destination';
import {ArticleDocument} from './ArticleDocument';

export class Article {
  id: number;
  title: string;
  articleType: string;
  author: Author;
  destination: Destination;
  articleDocument: ArticleDocument;
  articleBrief: string;
  createdTime: string;
  modifiedTime: number;
  articleReadCount: number;
  upVote: number;
  downVote: number;
}
