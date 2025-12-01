export class FlightBookingApplicationPage{

    constructor(page){
        this.page = page;
        this.findYourPerfectFlightLogo = page.locator('div.card-body h2');
        this.fromSelectCityDropdown = '#from';
        this.toSelectCityDropdown = '#to';
        this.selectDepartureDate = page.locator('#departureDate');
        this.selectReturnDate = page.locator('#returnDate');
        this.numberOfPassengers = page.locator('#passengers'),
        this.selectTravelClass = page.locator('#travelClass');
        this.oneWayCheckBox = page.locator('#oneWay');
        this.searchFlightsButton = 'button.w-100';
    }

    async selectCities(){
        await this.page.locator(this.fromSelectCityDropdown).selectOption({label:'Delhi'});
        // await this.page.locator(this.toSelectCityDropdown).selectOption({value: 'New York'});
        // await this.page.waitForTimeout(5000);

        // await this.page.locator(this.toSelectCityDropdown).selectOption({index: 2});
        // await this.page.waitForTimeout(5000);

        await this.page.locator(this.toSelectCityDropdown).selectOption('Mumbai');
    }

    async selectPassengersAndTravelClass(passengers, travelClass){
        await this.numberOfPassengers.fill(passengers);
        await this.selectTravelClass.selectOption(travelClass);
    }

    async selectOneWayCheckbox(){
        await this.oneWayCheckBox.check();
    }

    async selectDepartureAndReturnDate(departureDate){
        await this.selectDepartureDate.fill(departureDate);
        await this.page.waitForTimeout(5000);
    }
}