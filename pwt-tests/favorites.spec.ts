import { test, expect } from '@playwright/test';

test.describe('Favorites', () => {
  test('Redirect to login if unauthorized',
    async ({ page }) => {
      await page.goto('http://localhost:5173');

      //Wait to finish loading
      await page.waitForSelector('.cities__card');

      // Test redirect
      await page.goto('http://localhost:5173/favorites');
      page.waitForURL('http://localhost:5173/login');
    });
  test('Add to favorites',
    async ({ page }) => {
      await page.goto('http://localhost:5173');

      //Wait to finish loading
      await page.waitForSelector('.cities__card');
      await page.getByText('Sign in').click();

      await page.fill('input[name="email"]', 'rub@gmail.com');
      await page.fill('input[name="password"]', 'p123');
      await page.click('button[type="submit"]');

      /// Add to favorites
      const cardElement = await page.locator('.cities__card').first();
      const aElement = await cardElement.locator('a').first();
      const href = await aElement.getAttribute('href');
      const cardId = href ? href.split('/').pop() : '';

      const initialCount = await page.locator('.header__favorite-count').textContent() || 0;
      const addToFavoritesButton = await page.locator('.place-card__bookmark-button').all();
      await addToFavoritesButton[0].click();

      await page.waitForResponse((resp) => resp.url().includes(`/six-cities/favorite/${ cardId }/1`));
      await page.waitForTimeout(250);
      const count = await page.locator('.header__favorite-count').textContent();

      expect(Number(count)).toBe(Number(initialCount) + 1);
      ///

      /// Remove from favorites
      await addToFavoritesButton[0].click();
      await page.waitForResponse((resp) => resp.url().includes(`/six-cities/favorite/${ cardId }/0`));
      await page.waitForTimeout(100);
      const finalCount = await page.locator('.header__favorite-count').textContent();
      expect(Number(finalCount)).toBe(Number(initialCount));
      /// Remove from favorites
    });
})