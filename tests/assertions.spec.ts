import { test, expect } from '@playwright/test';

import { PlayWright } from '../utils/pages.spec';

test.beforeEach(async ({ page }) => {
  await page.goto(PlayWright.home);
});

test('Should be visible', async ({ page }) => {
  const button = page.getByRole('link', { name: 'Get started' });

  await expect(button).toBeVisible();
});
