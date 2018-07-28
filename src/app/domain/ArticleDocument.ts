import {Paragraph} from './Paragraph';

export class ArticleDocument {
  id: number;
  articleImage: string;
  paragraphs?: (Paragraph)[] | null;
}
