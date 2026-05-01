import { Page, expect } from '@playwright/test'



type Customer = {
    name: string;
    sidemark: string;
    address: string;
    phoneNumber: string;

};

type Quote = {
    category: string;
    product: string;
    color: string;
    width: string;
    height: string;
    mountingPosition: string;
    windowLocation: string;

};

// Fill customer information from /data
export async function fillCustomerInfo(page: Page, customer: Customer) {
    
    // Make sure these render properly before filling them
    await expect(page.getByTestId(/customer-name-input/i)).toBeVisible();
    await page.getByTestId(/customer-name-input/i).fill(customer.name);

    await expect(page.getByTestId(/sidemark-input/i)).toBeVisible();
    await page.getByTestId(/sidemark-input/i).fill(customer.sidemark);

    await expect(page.getByTestId(/customer-address-input/i)).toBeVisible();
    await page.getByTestId(/customer-address-input/i).fill(customer.address);

    await expect(page.getByTestId(/customer-phone-number-input/i)).toBeVisible();
    await page.getByTestId(/customer-phone-number-input/i).fill(customer.phoneNumber);


}

// Fill quote information from /data
export async function fillQuoteInfo(page: Page, quote: Quote) {

    await page.getByTestId(/category-select/i).selectOption(quote.category);
    await page.getByTestId(/product-select/i).selectOption(quote.product);
    await page.getByTestId(/color-select/i).selectOption(quote.color);
    await page.getByTestId(/width-input/i).fill(quote.width);
    await page.getByTestId(/height-input/i).fill(quote.height);
    await page.getByTestId(/mounting-position-select/i).selectOption(quote.mountingPosition);
    await page.getByTestId(/window-location-input/i).fill(quote.windowLocation);

}

//Click Add Items to Quote
export async function addItemToQuote (page: Page) {
    
    const addItemToQuote = page.getByRole('button', { name: 'Add Item(s) to Quote' });
    await expect(addItemToQuote).toBeVisible();
    await expect(addItemToQuote).toBeEnabled();
    await addItemToQuote.scrollIntoViewIfNeeded();
    await addItemToQuote.click();

    // make sure the "Go to quote" button is rendered
    await expect(page.getByRole('button', { name: 'Go to Quote' })).toBeVisible();

}