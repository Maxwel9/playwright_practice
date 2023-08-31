import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://playwright.dev/');
});

test.describe('Test Scenario', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
  });

  test('Test Case 1', async ({ page }) => {
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('Test Case 2', async ({ page }) => {
    await expect(page).toHaveTitle(/Playwright/);
  });

  test.describe('Test Scenario', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('https://playwright.dev/');
    });

    test('Test Case 1', async ({ page }) => {
      await expect(page).toHaveTitle(/Playwright/);
    });

    test('Test Case 2', async ({ page }) => {
      await expect(page).toHaveTitle(/Playwright/);
    });
  });

  test.describe('Test Scenario', () => {
    test('Test Case 3', async ({ page }) => {
      await expect(page).toHaveTitle(/Playwright/);
    });

    test('Test Case 4', async ({ page }) => {
      await expect(page).toHaveTitle(/Playwright/);
    });
  });
});
