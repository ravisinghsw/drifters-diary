import {Author} from './Author';
import {Destination} from './Destination';
import {ArticleDocument} from './ArticleDocument';

export class Article {
  private _id: number;
  private _title: string;
  private _articleType: string;
  private _author: Author;
  private _destination: Destination;
  private _articleDocument: ArticleDocument;
  private _articleBrief: string;
  private _createdTime: string;
  private _modifiedTime: number;
  private _articleReadCount: number;
  private _upVote: number;
  private _downVote: number;
  private _articleImage: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get articleType(): string {
    return this._articleType;
  }

  set articleType(value: string) {
    this._articleType = value;
  }

  get author(): Author {
    return this._author;
  }

  set author(value: Author) {
    this._author = value;
  }

  get destination(): Destination {
    return this._destination;
  }

  set destination(value: Destination) {
    this._destination = value;
  }

  get articleDocument(): ArticleDocument {
    return this._articleDocument;
  }

  set articleDocument(value: ArticleDocument) {
    this._articleDocument = value;
  }

  get articleBrief(): string {
    return this._articleBrief;
  }

  set articleBrief(value: string) {
    this._articleBrief = value;
  }

  get createdTime(): string {
    return this._createdTime;
  }

  set createdTime(value: string) {
    this._createdTime = value;
  }

  get modifiedTime(): number {
    return this._modifiedTime;
  }

  set modifiedTime(value: number) {
    this._modifiedTime = value;
  }

  get articleReadCount(): number {
    return this._articleReadCount;
  }

  set articleReadCount(value: number) {
    this._articleReadCount = value;
  }

  get upVote(): number {
    return this._upVote;
  }

  set upVote(value: number) {
    this._upVote = value;
  }

  get downVote(): number {
    return this._downVote;
  }

  set downVote(value: number) {
    this._downVote = value;
  }

  get articleImage(): string {
    return this._articleImage;
  }

  set articleImage(value: string) {
    this._articleImage = value;
  }
}
