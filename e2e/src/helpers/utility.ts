import { browser } from 'protractor';
const data = require('../../../db.json');

/**
 * Go to homepage of the app
 */
export const goToHomepage = () => {
  return browser.get(browser.baseUrl);
};

/**
 * Get Level of item based on title
 *
 * @param title of Item that we are searching level for
 */
export const getLevel = (titleOfItem: any) => {
  const parentId = data.items.find(({ title }) => title === titleOfItem).parent_id;
  if (parentId === null) {
    return 1;
  } else if (data.items.find(({ id }) => id === parentId)) {
    const grandParentId = data.items.find(({ id }) => id === parentId).parent_id;
    if (grandParentId === null) {
      return 2;
    } else return 3;
  }
};

/**
 * For selected element check if he have given class
 *
 * @param element Protractor selector
 * @param cls class that is going to be checked
 */
export const hasClass = (
  element: {
    getText?: (() => Promise<any>) | (() => Promise<any>) | (() => Promise<any>);
    getAttribute?: any;
  },
  cls: any,
) => {
  return element.getAttribute('class').then(function(classes) {
    return classes.split(' ').indexOf(cls) !== -1;
  });
};

/**
 * Find first item for desired level
 *
 * @param level item level
 */
export const findItemLevel = (level: number) => {
  for (let { parent_id, id } of data.items) {
    const parentId = parent_id;
    if (parentId === null && level === 1) {
      return id;
    } else if (data.items.find(({ id }) => id === parentId)) {
      const grandParent = parent_id;
      const oneBefore = data.items.find(({ id }) => id === grandParent);
      if (oneBefore.parent_id === null && level === 2) {
        return id;
      } else if (oneBefore) {
        const chukunParent = oneBefore.parent_id;
        if (
          oneBefore.parent_id !== null &&
          data.items.find(({ id }) => id === chukunParent).parent_id === null &&
          level === 3
        ) {
          return id;
        }
      }
    }
  }
};
