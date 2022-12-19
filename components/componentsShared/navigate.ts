import { Page } from "@playwright/test";

import * as home from "../home/home";
import * as selectors from "./selectors";

async function firstPost(page: Page) {
	await home.go(page);
	await page.locator(selectors.post_header).first().click();
}

export { firstPost };