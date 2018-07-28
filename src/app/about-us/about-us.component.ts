import { Component, OnInit } from '@angular/core';
import {Author} from '../domain/Author';
import {LetsConnect} from '../domain/LetsConnect';
import {SocialMediaCSS} from '../utility/SocialMediaCSS';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  author: Author;

  constructor(public socialMediaCss: SocialMediaCSS) { }

  ngOnInit() {
    this.author = new Author();
    this.author.name = 'Ravi Singh';
    this.author.briefInformation = 'Travel Blogger';
    this.author.profilePicUrl = '../../assets/images/IMG_0477.JPG';

    const fbconnect = new LetsConnect();
    fbconnect.socialMedia = 'FACEBOOK';
    fbconnect.socialMediaUrl = 'https://www.facebook.com/ravi.singhsw';

    const googleconnect = new LetsConnect();
    googleconnect.socialMedia = 'GOOGLE';
    googleconnect.socialMediaUrl = 'https://plus.google.com/u/0/102843333311851835463';

    const youtubeconnect = new LetsConnect();
    youtubeconnect.socialMedia = 'YOUTUBE';
    youtubeconnect.socialMediaUrl = 'https://www.youtube.com/channel/UCEo2Yu6yleHu1wloUPVpEMQ';

    let letConnectList: LetsConnect[];
    letConnectList = [fbconnect, googleconnect, youtubeconnect];

    this.author.letsConnect = letConnectList;

  }

  getSocialMediaCss(key: string): string {
     const s = this.socialMediaCss.getSocialMediaCss(key);
     return s;
  }


}
