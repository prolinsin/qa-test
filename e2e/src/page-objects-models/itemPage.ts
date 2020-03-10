import { by, element } from 'protractor';

export default class ItemPage {
  pageUrl: string;
  getId: any;
  getTitle: any;
  getLevel: any;

  constructor() {
    this.pageUrl = 'http://localhost:4200/item/';
    this.getId = element(by.css('.item:first-child'));
    this.getTitle = element(by.css('.itemName:nth-child(2)'));
    this.getLevel = element(by.css('.item:last-child'));
  }
}
