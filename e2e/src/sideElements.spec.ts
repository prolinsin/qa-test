import Header from './page-objects-models/header';
import Sidebar from './page-objects-models/sidebar';
import { goToHomepage } from './helpers/utility';

describe('Check side elements on Homepage', () => {
  const {
    tag: headerTag,
    logo,
    logoPath,
    logoAlt,
    userProfileButton,
    userProfileButtonText,
    userProfileImage,
    userProfileImagePath,
  } = new Header();
  const { tag, image, items, itemsText, imagePath } = new Sidebar();

  beforeEach(async () => {
    goToHomepage();
  });

  it('should sidebar with correct items exist', () => {
    expect(tag.isDisplayed()).toBe(true);
    expect(image.getAttribute('src')).toMatch(imagePath);
    items.getText().then(text => {
      expect(text).toEqual(itemsText);
    });
  });

  it('should header with logo be present', () => {
    expect(headerTag.isDisplayed()).toBe(true);
    expect(logo.getAttribute('src')).toMatch(logoPath);
    expect(logo.getAttribute('alt')).toMatch(logoAlt);
  });

  it('should user informations be displayed', () => {
    expect(userProfileImage.getAttribute('src')).toMatch(userProfileImagePath);
    expect(userProfileButton.isDisplayed()).toBe(true);
    expect(userProfileButton.getText()).toMatch(userProfileButtonText);
  });
});
