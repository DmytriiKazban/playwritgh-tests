import { expect, type Locator, type Page } from '@playwright/test';

export class wikiMain {
  readonly page: Page;
  readonly searchField: Locator;
  readonly searchBtn: Locator;
  readonly articlHeader: Locator;
  readonly anthem: Locator;
  readonly anthemBox: Locator;
  readonly language: Locator;

  constructor(page: Page) {
    this.page = page;

    this.searchField = page.getByPlaceholder('Search Wikipedia');
    this.searchBtn = page.getByRole('button', { name: 'Search' });
    this.articlHeader = page.locator('//*[@id="firstHeading"]');
    this.anthem = page.locator('//*[@title="Play audio"]');
    this.anthemBox = page.locator('//*[@class="infobox-full-data anthem"]');
    this.language = page.getByRole('cell', { name: 'Ukrainian[1]' });
  }

  async goTo() {
    await this.page.goto('https://en.wikipedia.org/wiki/Main_Page')
  }
}