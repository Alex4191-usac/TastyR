import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
});

//end to end test

const categories = [
    'Beef', 'Chicken', 'Dessert', 'Lamb', 'Pasta', 'Pork', 'Seafood', 'Side', 'Starter'
]

test.describe('navigate into categories', () => {
    test('should navigate into each category', async ({ page }) => {
        for (const category of categories) {
            await page.click(`text=${category}`);
            await page.waitForSelector(`text=List of ${category} recepies :`);
            const button = await page.locator('button >> text=1');
            await expect(button).toBeVisible();
        }
    });


    
});