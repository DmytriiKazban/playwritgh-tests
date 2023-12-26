import { test, expect} from '@playwright/test';
import { mainPage } from '../pages/page1';
import { cookiesModal } from '../pages/page2';


test.beforeEach('tests',async ({page}) => {
    const mainpage = new mainPage(page);
    await mainpage.goTo();
})

test('accept all cookies',async ({page}) => {
    const cookiesaccept = new cookiesModal(page);

    await cookiesaccept.acceptCookies.click();
})

test('accept only neccessary', async ({page}) => {
    const mainpage = new cookiesModal(page);

    await mainpage.onlyNecessaryCookies.click();
})

test('transalte from Eng to Ukr', async ({page}) => {
    const mainpage = new mainPage(page);
    const cookiesaccept = new cookiesModal(page);

    await cookiesaccept.acceptCookies.click();
    await mainpage.selectSoruceLanguage.click();
    await mainpage.Ukr.click();
    await mainpage.selectTargetLanguage.click();
    await mainpage.Eng.click();
    await mainpage.sourceLangTypeField.fill("Привіт всім!");
    
    
    const targetText = (await mainpage.targetLangTypeField.innerText());
    await expect(targetText).toContain("Hello, everyone!");
})