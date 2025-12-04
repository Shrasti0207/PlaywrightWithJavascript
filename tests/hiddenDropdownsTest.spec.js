import { expect, test } from "@playwright/test";

test('Hidden options dropdown', async({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('img[alt="client brand banner"]')).toBeVisible();
    await expect(page.locator('div.oxd-sidepanel-body li:nth-child(2) a')).toBeVisible();
    await page.locator('div.oxd-sidepanel-body li:nth-child(2) a').click();
    await expect(page.locator('div.oxd-topbar-header-title')).toBeVisible();
    await page.locator('div.oxd-form-row div:nth-child(6) div:nth-child(2) div.oxd-select-text--after i').click();

    await page.waitForTimeout(5000);

    const options = await page.$$("div[role='listbox'] span")

    for(let option of options){
        const jobTitle = await option.textContent();
        // console.log(jobTitle);

        if(jobTitle.includes('QA Engineer')){
            await option.click();
            break;
        }
    }

    await page.waitForTimeout(5000);
})