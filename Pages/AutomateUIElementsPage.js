export class AutomateUIElementsPage{

    constructor(page){
        this.automateUIElementsText = page.locator('div.explore-ui-container > div > h2');
        this.option1Checkbox = page.locator('input[name = "option1"]');
        this.option2Checkbox = page.locator('input[name = "option2"]');

        this.checkboxes = [
            this.option1Checkbox,
            this.option2Checkbox,
        ]
    }

    // select multiple checkboxes
    async checkMultipleCheckboxes(){
        for(const checkbox of this.checkboxes){
            await checkbox.check();
        }
    }

    // unchecked multiple checkboxes if it is checked
    async unCheckMultipleCheckboxes(){
        for(const checkbox of this.checkboxes){
            if(await checkbox.isChecked()){
                await checkbox.uncheck();
            }
        }
    }
}