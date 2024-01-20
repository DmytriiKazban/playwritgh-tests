import { test, expect} from '@playwright/test';
import { wikiMain } from '../pages/wikiMainPage';

test.beforeEach('tests',async ({page}) => {
    const wiki = new wikiMain(page);
    await wiki.goTo();
})

test("Search", async ({page}) => {
const wiki = new wikiMain(page);

await wiki.searchField.fill("Ukraine");
await wiki.searchBtn.click();

await expect(wiki.articlHeader).toContainText("Ukraine")

})

test("Has Anthem",async ({page}) => {
    const wiki = new wikiMain(page);

    await wiki.searchField.fill("Ukraine");
    await wiki.searchBtn.click();

    await expect(wiki.anthemBox).toContainText("Державний Гімн України")
})

test("Oficial language",async ({page}) => {
    const wiki = new wikiMain(page);

    await wiki.searchField.fill("Ukraine");
    await wiki.searchBtn.click();

    await expect(wiki.language).toContainText("Ukrainian")
})