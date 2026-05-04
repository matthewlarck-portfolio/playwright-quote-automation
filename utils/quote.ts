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
    
    const fillCustomerName = page.getByTestId(/customer-name-input/i);
    const fillSidemark = page.getByTestId(/sidemark-input/i);
    const fillCustomerAddress = page.getByTestId(/customer-address-input/i);
    const fillCustomerPhoneNumber = page.getByTestId(/customer-phone-number-input/i);

    await expect(fillCustomerName).toBeVisible();
    await fillCustomerName.fill(customer.name);
    await expect(fillCustomerName).toHaveValue(customer.name);

    await expect(fillSidemark).toBeVisible();
    await fillSidemark.fill(customer.sidemark);
    await expect(fillSidemark).toHaveValue(customer.sidemark);

    await expect(fillCustomerAddress).toBeVisible();
    await fillCustomerAddress.fill(customer.address);
    await expect(fillCustomerAddress).toHaveValue(customer.address);

    await expect(fillCustomerPhoneNumber).toBeVisible();
    await fillCustomerPhoneNumber.fill(customer.phoneNumber);
    await expect(fillCustomerPhoneNumber).toHaveValue(customer.phoneNumber);

      // Final stability check before moving to quote/category fields
    await expect(fillCustomerName).toHaveValue(customer.name);
    await expect(fillSidemark).toHaveValue(customer.sidemark);
    await expect(fillCustomerAddress).toHaveValue(customer.address);
    await expect(fillCustomerPhoneNumber).toHaveValue(customer.phoneNumber);
    }

// Fill quote information from /data
export async function fillQuoteInfo(page: Page, quote: Quote, customer: Customer) {

    const categorySelect = page.getByTestId('category-select');
    const productSelect = page.getByTestId('product-select');
    const colorSelect = page.getByTestId('color-select');

    await expect(categorySelect).toBeVisible();
    await categorySelect.selectOption(quote.category);

    // Make sure customer fields did not get wiped after category change
    await expect(page.getByTestId('customer-name-input')).toHaveValue(customer.name);
    await expect(page.getByTestId('sidemark-input')).toHaveValue(customer.sidemark);
    await expect(page.getByTestId('customer-address-input')).toHaveValue(customer.address);
    await expect(page.getByTestId('customer-phone-number-input')).toHaveValue(customer.phoneNumber);
        
// Wait for product dropdown to be ready after category selection
    await expect(productSelect).toBeVisible();
    await expect(productSelect).toBeEnabled();
    await productSelect.selectOption(quote.product);

    // Wait for color dropdown to be ready after product selection
    await expect(colorSelect).toBeVisible();
    await expect(colorSelect).toBeEnabled();
    await colorSelect.selectOption(quote.color);


    await page.getByTestId('width-input').fill(quote.width);
    await page.getByTestId('height-input').fill(quote.height);
    await page.getByTestId('mounting-position-select').selectOption(quote.mountingPosition);
    await page.getByTestId('window-location-input').fill(quote.windowLocation);

}

//Click Add Items to Quote
export async function addItemToQuote (page: Page) {
    
    const addItemToQuote = page.getByRole('button', { name: 'Add Item(s) to Quote' });

    await expect(addItemToQuote).toBeVisible();
    await expect(addItemToQuote).toBeEnabled();
    await addItemToQuote.scrollIntoViewIfNeeded();
    await addItemToQuote.click();

}

export async function goToQuote (page: Page) {

    const goToQuote = page.getByRole('button', { name: 'Go to Quote' });

    await expect(goToQuote).toBeVisible();
    await expect(goToQuote).toBeEnabled();
    await goToQuote.scrollIntoViewIfNeeded();
    await goToQuote.click();

}