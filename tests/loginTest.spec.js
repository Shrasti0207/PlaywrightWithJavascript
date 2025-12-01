import { expect, test } from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";
import { HomePage } from "../Pages/HomePage";

test('Login page' , async({page}) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    await page.setViewportSize({ width: 1920, height: 1080 });
    await homePage.goToWebsiteHomePage();
    await expect(page).toHaveTitle('TesterBud - Best Demo Website for Automation Testing | Practice & Learn')
    await homePage.getStarted();
    await expect(homePage.automationTestingPraticeHubText).toBeVisible;
    await homePage.clickOnLoginPageLink();
    await expect(loginPage.loginAccountText).toBeVisible();
    await expect(loginPage.emailAddressInput).toBeEditable();
    await expect(loginPage.emailPasswordInput).toBeEditable();
    await loginPage.loginAnAccount("user@premiumbank.com", "Bank@123");
    await expect(loginPage.loginSuccessMessage).toHaveText('Login Successful! Welcome to Premium Banking.')
})