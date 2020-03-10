import { by, element } from 'protractor';

export default class Header {
  tag: any;
  logo: any;
  logoPath: string;
  logoAlt: string;
  userProfileImage: any;
  userProfileImagePath: string;
  userProfileButton: any;
  userProfileButtonText: any;

  constructor() {
    this.tag = element(by.css('header'));
    this.logo = element.all(by.css('header img')).first();
    this.logoPath = 'assets/logo.svg';
    this.logoAlt = 'Cobiro logo';

    this.userProfileImage = element(by.css('.header__profile img'));
    this.userProfileImagePath = 'assets/c4beea3c4cccbceb8de269c8cdf11f2e.png';
    this.userProfileButton = element(by.css('.header__name'));
    this.userProfileButtonText = 'Morten';
  }
}
