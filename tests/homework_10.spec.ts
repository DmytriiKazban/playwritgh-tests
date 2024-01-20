import { test, expect} from '@playwright/test';
import { mainPage } from '../pages/warsawsneakerstor/mainPage';
import { login } from '../pages/warsawsneakerstor/loginPage';
import { signIn } from '../pages/warsawsneakerstor/signinPage';
import { acceptCookies } from '../pages/warsawsneakerstor/cookiesPage';

test.beforeEach('tests',async ({page}) => {
    const mainpage = new mainPage(page);
    await mainpage.goTo();
})

test('sign In with valid creds',async ({page}) => {
    const mainpage = new mainPage(page);
    const acceptcookies = new acceptCookies(page);
    const loginpage = new login(page);
    const signinpage = new signIn(page);

    await acceptcookies.acceptCookiesBtn.click();
    await mainpage.loginBtn.click();
    await loginpage.signInBtn.click();
    await signinpage.signinEmailField.fill('stuxffbordeaux+1@gmail.com');
    await signinpage.signinNameField.fill('Dmytrii');
    await signinpage.signinPasswordField.fill('Qwe1234565!');
    await signinpage.signinSubmitBtn.click();

    await expect(mainpage.completeSignIntxt).toBeVisible;
})

test('sign in with already created creds', async ({page}) => {
    const mainpage = new mainPage(page);
    const acceptcookies = new acceptCookies(page);
    const loginpage = new login(page);
    const signinpage = new signIn(page);

    await acceptcookies.acceptCookiesBtn.click();
    await mainpage.loginBtn.click();
    await loginpage.signInBtn.click();
    await signinpage.signinEmailField.fill('stuxffbordeaux+1@gmail.com');
    await signinpage.signinNameField.fill('Dmytrii');
    await signinpage.signinPasswordField.fill('Qwe1234565!');
    await signinpage.signinSubmitBtn.click();
    
    await expect(signinpage.emailAlreadyExists).toHaveText('');
})
