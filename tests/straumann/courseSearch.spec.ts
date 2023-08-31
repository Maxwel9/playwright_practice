import { test, expect } from '@playwright/test';
const percySnapshot = require('@percy/playwright');

import { Straumann, Parm } from '../../utils/pages.spec';

test.describe('[DESKTOP] Course Search Component >', () => {
  test.describe('On the com/en Page >', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(Straumann.courseSearch);
    });

    test('Should look ok', async ({ page }) => {
      await percySnapshot(page, '[PlayWright] Course Search');
    });

    test('Should have correct metadata', async ({ page }) => {
      await expect(page).toHaveTitle(/Local and international courses/);
    });
  });

  test.describe('Basics >', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(Straumann.courseSearch + Parm.SORT.START_DATE_ASC);
    });

    test('Should display facet filters', async ({ page }) => {
      await page.getByRole('button');
    });
  });
});
