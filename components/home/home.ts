import { Page } from "@playwright/test";

const urls = {
	home_en: "en",
};

async function go(page: Page) {
	await page.goto(urls.home_en);
}

export {go};