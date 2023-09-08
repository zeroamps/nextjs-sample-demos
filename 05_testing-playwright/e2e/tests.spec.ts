import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Hello, world!');
});

test('navigate to Post 1', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Post 1' }).click();

  await expect(page).toHaveURL('/posts/1');
  await expect(page).toHaveTitle('Post 1');
});
