import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://tasty-r-rsc4.vercel.app');
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

    test('should navigate into a category and click on a recipe', async ({ page }) => {
        await page.click('text=Beef');
        const pageNumber = Math.floor(Math.random() * 3) + 1;
        await page.click(`button >> text=${pageNumber}`);
        const gridContainer = await page.locator('section >> div');
        const firstChild = await gridContainer.locator('div').first();
        await firstChild.hover();
        await page.click('text=View Recipe');
        expect(page.url()).toContain('recipe');
    });

    
    




    
});