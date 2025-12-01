import { expect, test } from "@playwright/test";
import { HomePage } from "../Pages/HomePage.js";
import { FlightBookingApplicationPage } from "../Pages/FlightBookingApplicationPage.js";

test(' Test Dynamic search filter in flight booking', async({page}) => {

    const homePage = new HomePage(page);
    const flightBookingApplicationPage = new FlightBookingApplicationPage(page);
    await page.setViewportSize({ width: 1920, height: 1080 });
    await homePage.goToWebsiteHomePage();
    await expect(page).toHaveTitle('TesterBud - Best Demo Website for Automation Testing | Practice & Learn')
    await homePage.getStarted();
    await expect(homePage.automationTestingPraticeHubText).toBeVisible;
    await homePage.clickOnFlightBooking();
    await expect(flightBookingApplicationPage.findYourPerfectFlightLogo).toBeVisible();
    await flightBookingApplicationPage.selectCities();
    await expect(flightBookingApplicationPage.numberOfPassengers).toBeEditable();
    await expect(flightBookingApplicationPage.numberOfPassengers).toBeVisible();
    await flightBookingApplicationPage.selectPassengersAndTravelClass("2", 'Business');
    await flightBookingApplicationPage.selectOneWayCheckbox();
    await expect(flightBookingApplicationPage.oneWayCheckBox).toBeChecked();    
    expect(await flightBookingApplicationPage.oneWayCheckBox.isChecked()).toBe(true);
    await flightBookingApplicationPage.selectDepartureAndReturnDate("2026-02-26")
})