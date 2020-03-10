import { by, element } from 'protractor';

export default class Sidebar {
  tag: any;
  image: any;
  imagePath: string;
  items: any;
  itemsText: string[];

  constructor() {
    this.tag = element(by.css('nav'));
    this.image = element(by.css('.nav__image img'));
    this.imagePath = 'assets/nicebeauty.com_eu_.png';
    this.items = element.all(by.css('nav a'));
    this.itemsText = [
      'hairstylist.com',
      'Marketing Plan',
      'Dashboard',
      'My Ads',
      'Analytics',
      'Cobiro Store',
    ];
  }
}
