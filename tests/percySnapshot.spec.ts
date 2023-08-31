import { test } from '@playwright/test';
const percySnapshot = require('@percy/playwright');

import { Straumann } from '../utils/pages.spec';

test('Home page should look ok', async ({ page }) => {
  await page.goto(Straumann.home);

  // Take a percy snapshot.
  await percySnapshot(page, '[PlayWright] Straumann Home Page');
});
