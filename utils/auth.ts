import { Page, expect } from '@playwright/test'

// Reusable login helper used across multiple testing scenarios
export async function login(page: Page) {

    // Open the application using the baseURL from Playwright Config
    await page.goto("/signin");

    // Enter email and password credentials for successful login
    await page.getByTestId('email-input').fill('Testuser1@gmail.com');     // Hard coding correct email temporarily ****
    await page.getByTestId('password-input').fill('Password');     // Hard coding correct password temporarily ****

    // Click Sign In Button (Submit Form)
    await page.getByRole('button', { name: /Sign In/i }).click();

    // Confirm successful login with correct URL
    await expect(page).toHaveURL("/");
    
    // Confirm that UI does not render Sign In Button
    await expect(page.getByRole('button', { name: /Sign In/i})).not.toBeVisible();
    
}

// Reusable click sign in button helper used across multiple testing scenarios
export async function clickSignInButton(page: Page) { 

    // Open application using baseURL from Playwright Config
    await page.goto("/signin");

    // Click sign in button
    await page.getByRole('button', { name: /Sign in/i }).click();

    // expect user to be on the sign in page afterwards
    await page.goto("/signin");
}