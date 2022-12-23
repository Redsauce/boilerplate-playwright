import { Page } from "@playwright/test";

const urls = require("../componentsShared/urls");

async function go(page: Page) {
	await page.goto(urls.english_url);
}

export {go};