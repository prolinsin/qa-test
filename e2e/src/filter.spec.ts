import AppMain from './page-objects-models/homePage';
import { goToHomepage, hasClass, getLevel, findItemLevel } from './helpers/utility';

const { search, treeElements, treeRoot, treeClassScheme } = new AppMain();

describe('Should be able to search the tree and be presented with a filtered list', () => {
  beforeEach(async () => {
    goToHomepage();
  });

  it('should not return results for non existing data', () => {
    search.sendKeys('blablabl');
    expect(treeRoot.isDisplayed()).toBe(false);
  });

  it('should filter level 3 item', () => {
    const input = `Item ${findItemLevel(3)}`;
    search.sendKeys(input);
    treeElements.each((element: { getText: () => Promise<any> }) => {
      element.getText().then((text: any) => {
        expect(text).toMatch(input);
      });
    });
  });

  it('should filter level 2 item', () => {
    const input = `Item ${findItemLevel(2)}`;
    search.sendKeys(input);
    treeElements.each((element: { getText: () => Promise<any> }) => {
      element.getText().then((text: any) => {
        const level = getLevel(text.substring(0, 6));
        expect(hasClass(element, treeClassScheme[`${level}`])).toBe(true);
      });
    });
  });

  it('should filter level 1 item', () => {
    const input = `Item ${findItemLevel(1)}`;
    search.sendKeys(input);
    treeElements.each((element: { getText: () => Promise<any> }) => {
      element.getText().then((text: any) => {
        const level = getLevel(text.substring(0, 6));
        expect(hasClass(element, treeClassScheme[`${level}`])).toBe(true);
      });
    });
  });
});
