import {OnInit} from '@angular/core';
import {faceBook, google, youtube} from './Constants';

const socialMediaCssMap = new Map<string, string>();
socialMediaCssMap.set(faceBook, 'p-2 fa fa-facebook-official fa-2x mx-auto');
socialMediaCssMap.set(google, 'p-2 fa fa-google-plus fa-2x mx-auto');
socialMediaCssMap.set(youtube, 'p-2 fa fa-youtube-square fa-2x');
export class SocialMediaCSS implements OnInit{
  ngOnInit(): void {
  }
  getSocialMediaCss(key: string): string {
   return socialMediaCssMap.get(key);
  }





}
