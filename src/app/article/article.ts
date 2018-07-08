export class Article {
   id: number;
   title: string;
   imgsrc: string;
   description: string;

  constructor(id: number, title: string, imgsrc: string, description: string) {
      this.id = id;
      this.title = title;
      this.imgsrc = imgsrc;
      this.description = description;
  }
}
