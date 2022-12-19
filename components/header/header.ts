import { Page } from "@playwright/test";

import * as selectors from "./selectors";

async function goHome(page: Page) {
	await page.locator(selectors.logo).nth(1).click();
}

export { goHome };