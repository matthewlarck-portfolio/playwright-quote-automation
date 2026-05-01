import { test, expect } from '@playwright/test'
import { clickSignInButton, login } from '../utils/auth'

    // Basic smoke test to confirm login works successfully
    test('@smoke user can login to app successfully', async ({ page }) => {

        // Reuse shared login helper from utils/auth.ts
        await login(page);

});


    // Smoke test for invalid login credentials showing error
    test('@smoke invalid login credentials shows error', async ({ page }) => { 

        // Reuse shared clickSignInbutton helper from utils/auth.ts
        await clickSignInButton(page);
    })