import { test } from '@playwright/test';
const percySnapshot = require('@percy/playwright');

import { STRAUMANN } from '../utils/pages.spec';

test('Home page should look ok', async ({ page }) => {
  await page.goto(STRAUMANN.COM_EN);

  // Take a percy snapshot.
  await percySnapshot(page, '[PlayWright] Straumann Home Page');
});
