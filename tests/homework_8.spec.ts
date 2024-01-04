import { test, expect} from '@playwright/test';
import { mainPage } from '../pages/page1';
import { cookiesModal } from '../pages/page2';
import { whyDeepl } from '../pages/page3';
import { proPlan } from '../pages/page4';


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

test('Feature page check', async ({page}) => {
    const mainpage = new mainPage(page);
    const checkFeature = new whyDeepl(page);

    await checkFeature.whyDeeplMenuBtn.click();
    await checkFeature.featuresMenuBtn.click();

    await expect(checkFeature.tailorFeature).toBeVisible()
})

test('Contact Sales', async ({page}) => {
    const mainpage = new mainPage(page);
    const cookiesaccept = new cookiesModal(page);
    const testProPlan = new proPlan(page);
    
    await cookiesaccept.acceptCookies.click();
    await testProPlan.testProPlanBtn.click();
    await testProPlan.contactSalesBtn.click()
    await expect(testProPlan.contactForm).toBeVisible()
})

