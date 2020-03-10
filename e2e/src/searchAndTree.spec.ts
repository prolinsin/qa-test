import AppMain from './page-objects-models/homePage';
import { goToHomepage, hasClass, getLevel } from './helpers/utility';
const data = require('../../db.json');

const {
  search,
  searchIcon,
  treeRoot,
  treeElements,
  searchPlaceholder,
  buttons,
  treeClassScheme,
  itemName,
  treeClassTextScheme,
} = new AppMain();

describe('On the main page I should see a tree structure of items', () => {
  beforeEach(async () => {
    goToHomepage();
  });

  it('should search bar exists', async () => {
    expect(search.isDisplayed()).toBe(true);
    expect(searchIcon.isDisplayed()).toBe(true);
    expect(search.getAttribute('placeholder')).toMatch(searchPlaceholder);
  });

  it('should tree structure exist with all its elements', async () => {
    expect(treeRoot.isDisplayed()).toBe(true);
    treeElements.count().then((number: any) => {
      expect(number).toEqual(data.items.length);
    });
    buttons.count().then((number: any) => {
      expect(number).toEqual(data.items.length);
    });
  });

  it('should tree structure have right identation with css classes', async () => {
    treeElements.each((element: { getText: () => Promise<any> }) => {
      element.getText().then((text: any) => {
        const level = getLevel(text.substring(0, 6));
        expect(hasClass(element, treeClassScheme[`${level}`])).toBe(true);
      });
    });
  });

  it('should tree structure have right text for identation nodes', async () => {
    treeElements.each((element: { getText: () => Promise<any> }, index) => {
      element.getText().then((text: any) => {
        const level = getLevel(text.substring(0, 6));
        expect(text).toMatch(itemName(index, treeClassTextScheme, level));
      });
    });
  });
});
