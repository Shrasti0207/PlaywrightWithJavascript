import { expect, test } from "@playwright/test";
import { HomePage } from "../Pages/HomePage";
import { AutomateUIElementsPage } from "../Pages/AutomateUIElementsPage";

test('Handle Multiple Checkboxes', async({page}) => {

    const homePage = new HomePage(page);
    const automateUIElementsPage = new AutomateUIElementsPage(page);
    await homePage.goToWebsiteHomePage();
    await expect(page).toHaveTitle('TesterBud - Best Demo Website for Automation Testing | Practice & Learn')
    await homePage.getStarted();
    await expect(homePage.automationTestingPraticeHubText).toBeVisible;
    await homePage.clickOnAutomateUIElementsLink();
    await expect(automateUIElementsPage.automateUIElementsText).toBeVisible();
    await automateUIElementsPage.checkMultipleCheckboxes();
    await expect(automateUIElementsPage.option1Checkbox).toBeChecked();
    await expect(automateUIElementsPage.option2Checkbox).toBeChecked();
    await automateUIElementsPage.unCheckMultipleCheckboxes();
    await expect(automateUIElementsPage.option1Checkbox).not.toBeChecked();
    await expect(automateUIElementsPage.option2Checkbox).not.toBeChecked();
})