import {LetsConnect} from './LetsConnect';

export class Author {

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get phoneNumber(): string {
    return this._phoneNumber;
  }

  set phoneNumber(value: string) {
    this._phoneNumber = value;
  }

  get briefInformation(): string {
    return this._briefInformation;
  }

  set briefInformation(value: string) {
    this._briefInformation = value;
  }

  get authorized(): boolean {
    return this._authorized;
  }

  set authorized(value: boolean) {
    this._authorized = value;
  }

  get auhorizedBy(): string {
    return this._auhorizedBy;
  }

  set auhorizedBy(value: string) {
    this._auhorizedBy = value;
  }

  get profilePicUrl(): string {
    return this._profilePicUrl;
  }

  set profilePicUrl(value: string) {
    this._profilePicUrl = value;
  }

  get articles(): null {
    return this._articles;
  }

  set articles(value: null) {
    this._articles = value;
  }

  get letsConnect(): LetsConnect[] | null {
    return this._letsConnect;
  }

  set letsConnect(value: LetsConnect[] | null) {
    this._letsConnect = value;
  }

  private _id: number;
  private _name: string;
  private _email: string;
  private _phoneNumber: string;
  private _briefInformation: string;
  private _authorized: boolean;
  private _auhorizedBy: string;
  private _profilePicUrl: string;
  private _articles?: null;
  private _letsConnect?: (LetsConnect)[] | null;

}
