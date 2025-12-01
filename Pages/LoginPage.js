export class LoginPage{

    constructor(page){
        this.page = page;
        this.loginAccountText = page.locator('div.card-body div.text-center h2');
        this.emailAddressInput = page.locator('#formBasicEmail');
        this.emailPasswordInput = page.locator('#formBasicPassword');
        this.signInButton = page.locator('button[type = "submit"]');
        this.loginSuccessMessage = page.locator('div.alert-success');
    }

    async loginAnAccount(email, password){
        await this.emailAddressInput.fill(email);
        await this.emailPasswordInput.fill(password);
        await this.signInButton.click();
    }
}