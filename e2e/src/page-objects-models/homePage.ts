import { browser, by, element } from 'protractor';

export default class AppMain {
  pageUrl: string;
  search: any;
  searchIcon: any;
  searchPlaceholder: string;
  treeRoot: any;
  treeElements: any;
  treeClassScheme: { 1: string; 2: string; 3: string };
  buttons: any;
  treeClassTextScheme: { 1: string; 2: string; 3: string };
  itemPageUrl: string;
  singleButton: any;

  constructor() {
    this.pageUrl = browser.baseUrl;
    this.search = element(by.css('[ng-reflect-model]'));
    this.searchIcon = element(by.css('app-home div svg'));
    this.searchPlaceholder = 'Search';

    this.treeRoot = element(by.css('app-home ul'));
    this.treeElements = element.all(by.css('[ng-reflect-ng-class="[object Object]"]'));
    this.singleButton = element(by.css('app-home ul li button'));
    this.buttons = element.all(by.css('app-home ul li button'));

    this.treeClassScheme = {
      1: '',
      2: 'indent-1',
      3: 'indent-2',
    };

    this.treeClassTextScheme = {
      1: 'Level',
      2: 'Level 1',
      3: 'Level 2',
    };
  }

  /**
   * Return item name like on app
   *
   * @param index index of item
   * @param selector protractor selector
   * @param level level of an item
   */
  itemName(index: number, treeClassTextScheme: { [x: string]: string }, level: any) {
    return `Item ${index + 1} - ` + treeClassTextScheme[`${level}`];
  }
}
