import { Page } from "@playwright/test";
import * as selectors from "./selectors";

async function changeToSpanishLang(page: Page) {
	await page.locator(selectors.languageChange).click();
}
export { changeToSpanishLang };