import { test, expect } from '@playwright/test';

test('Login', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'Test Login Page' }).click();
  await page.locator('#username').fill('practice');
  await page.locator('#password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('alert')).toHaveText('You logged into a secure area!');
});