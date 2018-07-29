
export class Paragraph {
  private _paragraph: string;
  private _imageUrl?: string | null;
  private _imageDestination?: string | null;

  get paragraph(): string {
    return this._paragraph;
  }

  set paragraph(value: string) {
    this._paragraph = value;
  }

  get imageUrl(): string | null {
    return this._imageUrl;
  }

  set imageUrl(value: string | null) {
    this._imageUrl = value;
  }

  get imageDestination(): string | null {
    return this._imageDestination;
  }

  set imageDestination(value: string | null) {
    this._imageDestination = value;
  }
}
