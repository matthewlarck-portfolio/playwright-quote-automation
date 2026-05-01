import { test, expect } from '@playwright/test'
import { navigateToStartNewQuotePage } from '../utils/nav';
import { login } from '../utils/auth';
import { fillCustomerInfo, fillQuoteInfo, addItemToQuote } from '../utils/quote';
import { quoteCases } from '../data/taskCases';



// Authenticated user can access new quote page
test('@smoke authenticated user can access new quote page', async ({ page }) => {

    // Shared login helper
    await login(page);

    //User click start new quote button
    await navigateToStartNewQuotePage(page);    

});


for (const quoteCase of quoteCases) {
    test(`@regression ${quoteCase.testName}`, async ({ page }) => {
        await login(page);
        await navigateToStartNewQuotePage(page);

        await fillCustomerInfo(page, quoteCase.customer);
        await fillQuoteInfo(page, quoteCase.quote);

        await addItemToQuote(page);

    })
}