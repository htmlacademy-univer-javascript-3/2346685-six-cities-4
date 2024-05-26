import { test, expect } from '@playwright/test';

test.describe('Login Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173'); // load page

    await page.locator('.header__nav-link').first().waitFor();
    const loginButton = await page.locator('.header__login');

    // go to login page
    await loginButton.first().click();
    await page.waitForURL('http://localhost:5173/login');
  });

  test('Valid data', async ({ page }) => {
    const email = 'email@gmail.com';
    // fill in the form
    await page.fill('input[name="email"]', email);
    await page.fill('input[name="password"]', 'passwrd123');

    // submit the form
    await page.click('button[type="submit"]');

    // wait for server response
    await page.waitForResponse((resp) => resp.url().includes('/six-cities/login') && resp.status() === 201);
    await page.waitForURL('http://localhost:5173/'); // should redirect to main page

    // check that the email in header is the same one entered in the form
    const element = await page.locator('.header__user-name');
    const text = await element.textContent();
    expect(text).toEqual(email);
  });

  test('Invalid password', async ({ page }) => {
    // fill in the form
    await page.fill('input[name="email"]', 'email@gmail.com');
    await page.fill('input[name="password"]', 'passwrd');

    // submit
    await page.click('button[type="submit"]');

    const url = page.url();
    expect(url).toBe('http://localhost:5173/login'); // page url should not change
  });
});