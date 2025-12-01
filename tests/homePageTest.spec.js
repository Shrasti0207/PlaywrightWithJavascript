import {test,  expect } from "@playwright/test";
import { HomePage } from "../Pages/HomePage";

test('Home Page Test', async({page}) => {

    const homePage = new HomePage(page);
    await homePage.goToWebsiteHomePage();
    // Hard assertions
    await expect(page).toHaveTitle('TesterBud - Best Demo Website for Automation Testing | Practice & Learn')
    await homePage.getStarted();
    await expect(homePage.automationTestingPraticeHubText).toHaveText('🧪 Automation Testing Practice Hub');
    await expect(homePage.automationTestingPraticeHubText).toBeVisible();
});