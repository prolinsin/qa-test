import { browser, by, element } from 'protractor';

export const findById = (id: string) => {
  browser.wait(function() {
    return element(by.id(id)).isPresent();
  }, 5000);
};

export const findByCss = (css: string) => {
  browser.wait(function() {
    return element(by.css(css)).isPresent();
  }, 5000);
};

export const findByModel = (model: string) => {
  browser.wait(function() {
    return element(by.model(model)).isPresent();
  }, 5000);
};

export const findByName = (name: string) => {
  browser.wait(function() {
    return element(by.name(name)).isPresent();
  }, 5000);
};

export const checkIfElementIsVisible = (element: { isDisplayed: () => void }) => {
  element.isDisplayed();
};

export const sleep = (timestamp: number) => {
  browser.sleep(timestamp);
};

export const getUrl = () => {
  browser.getCurrentUrl();
};

export const goTo = (page: string) => {
  return browser.get(page);
};

export const goBack = () => {
  browser.navigate().back();
};
