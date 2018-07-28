export class LetsConnect {
  private _id: number;
  private _socialMedia: string;
  private _socialMediaUrl: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get socialMedia(): string {
    return this._socialMedia;
  }

  set socialMedia(value: string) {
    this._socialMedia = value;
  }

  get socialMediaUrl(): string {
    return this._socialMediaUrl;
  }

  set socialMediaUrl(value: string) {
    this._socialMediaUrl = value;
  }
}
