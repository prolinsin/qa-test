import AppMain from './page-objects-models/homePage';
import ItemPage from './page-objects-models/itemPage';
import { goToHomepage } from './helpers/utility';
import { browser } from 'protractor';
import { sleep, goBack } from './helpers/frameworkExtension';
const data = require('../../db.json');

const { buttons } = new AppMain();
const { pageUrl, getId, getTitle, getLevel } = new ItemPage();

describe('All items will have a call to action that links to a page containing information on the item', () => {
  beforeEach(async () => {
    goToHomepage();
  });

  it('should check if url is correct after click on all button items', async () => {
    sleep(1000);
    for (let i = 0; i < 8; ++i) {
      buttons.get(i).click();
      browser.getCurrentUrl().then(currentURL => {
        expect(currentURL).toEqual(`${pageUrl}${i + 1}`);
      });
      goBack();
    }
  });

  it('should check all single pages for correct data', () => {
    sleep(1000);
    for (let i = 0; i < 8; ++i) {
      buttons.get(i).click();
      const { title, parent_id } = data.items.find(({ id }) => id === i + 1);
      expect(getId.getText()).toMatch(`Item ID: ${i + 1}`);
      expect(getTitle.getText()).toMatch(`Item Title: ${title}`);
      expect(getLevel.getText()).toMatch(`Item Parent ID: ${parent_id}`);
      goBack();
    }
  });
});
