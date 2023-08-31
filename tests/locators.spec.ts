import { test, expect } from '@playwright/test';

import { PlayWright, Straumann } from '../utils/pages.spec';

// .getByRole()
test('Get Started button should be visible', async ({ page }) => {
  const button = page.getByRole('link', { name: 'Get started' });

  await page.goto(PlayWright.home);
  await expect(button).toBeVisible();
});

// .getByText()
test('Text should be visible', async ({ page }) => {
  const text = page.getByText(
    'Cross-browser. Playwright supports all modern rendering engines including Chromi'
  );

  await page.goto(PlayWright.home);
  await expect(text).toBeVisible();

  /*
  NOTE
  Matching by text always normalizes whitespace, even with exact match. For
  example, it turns multiple spaces into one, turns line breaks into spaces and
  ignores leading and trailing whitespace.
  */
});

// .getByLabel()
test('Name filed should be visible', async ({ page }) => {
  const nameField = page.getByLabel('Name*');

  await page.goto(Straumann.contactUsForm);
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();
  await expect(nameField).toBeVisible();
  await nameField.fill('Daniel');

  /*
  WHEN TO USE LABEL LOCATORS
  Use this locator when locating form fields.
  */
});

// .getByPlaceholder()
test('Message field should be visible', async ({ page }) => {
  await page.goto(Straumann.contactUsForm);
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();
  const yourMessageField = page.getByPlaceholder('Enter your message here');
  await expect(yourMessageField).toBeVisible();
  await yourMessageField.fill('Daniel Test');

  /*
  WHEN TO USE PLACEHOLDER LOCATORS
  Use this locator when locating form elements that do not have labels but do
  have placeholder texts.
  */
});

// .getByAltText()
test('Playwright logo should be visible', async ({ page }) => {
  const playwrightLogo = page.getByAltText('Playwright logo');

  await page.goto(PlayWright.home);
  await expect(playwrightLogo).toBeVisible();

  /*
  WHEN TO USE ALT LOCATORS
  Use this locator when your element supports alt text such as <img> and <area>
  elements.
  */
});

// .getByTitle()
test('.getByTitle()', async ({ page }) => {
  await page.goto(PlayWright.home);
  /*
  WHEN TO USE TITLE LOCATORS
  Use this locator when your element has the [title=''] attribute.
  */
});

test('.getByTestId()', async ({ page }) => {
  await page.getByTestId('');
});
