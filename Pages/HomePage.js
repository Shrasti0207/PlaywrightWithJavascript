export class HomePage{

    constructor(page) {
        this.page = page;
        this.testerbudUltimateLogo = 'div.hero-section h3';
        this.practiceSiteDropdown = '#practice-sites-dropdown';
        this.getStartedLink = 'div.hero-section a';
        this.automationTestingPraticeHubText = page.locator('div.py-5 h2');
        this.flightBookingLink = ' div.bg-light  li:nth-child(2)  a';
        this.loginPageLink = page.locator('div.bg-light li:nth-child(3) h4');
        this.uiElementsPlaygroundLink = page.locator('div.bg-light li:nth-child(6) h4');

    }

    async goToWebsiteHomePage(){
        await this.page.goto('https://testerbud.com/');
    }

    async getStarted(){
        await this.page.locator(this.getStartedLink).click();
    }

    async clickOnFlightBooking(){
        await this.page.locator(this.flightBookingLink).click();
    }

    async clickOnLoginPageLink(){
        await this.loginPageLink.click();
    }

    async clickOnAutomateUIElementsLink(){
        await this.uiElementsPlaygroundLink.click();
    }
}