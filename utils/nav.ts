import { Page, expect } from '@playwright/test'


// Navigate to the New Quote Page 
export async function navigateToStartNewQuotePage(page: Page) {

    // Make sure user is on the correct page before proceeding
    await page.goto('/');

    // Click on "Start New Quote" Button
    await page.getByRole('button', { name: /Start New Quote/i }).click();

    // Confirm that user is on correct page (New Quote Page)
    await expect(page).toHaveURL(/\/new-quote\/.+/);

}