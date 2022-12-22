import { test, expect } from "@playwright/test";
import * as pw from "@playwright/test";
//import * as navigate from "../components/componentsShared/navigate";
//import * as header from "../components/header/header";


test("Header logo redirects to home page", async ({ page }) => {
/*
	const browser = await pw.chromium.connectOverCDP({
		wsEndpoint: `wss://cloud.testingbot.com?key=${process.env.TB_KEY}&secret=${process.env.TB_SECRET}&platform=WINDOWS&browserName=chrome&browserVersion=latest&name=Navigation test`,
	});

	const context = await browser.newContext();
	page = await context.newPage();
*/

	//await navigate.firstPost(page);
	//await header.goHome(page);
	//await expect(page).toHaveURL("https://www.redsauce.net/test/blog/en");

	await page.goto("https://www.google.com/");
	//await page.screenshot({ path: 'screenshot.png' });
	await expect(page).toHaveURL("https://www.google.com/");
	//await browser.close();

});