import { test, expect } from "@playwright/test";
//import * as pw from '@playwright/test';
import * as navigate from "../components/componentsShared/navigate";
import * as header from "../components/header/header";

test("Header logo redirects to home page", async ({ page }) => {
/*
	const browser = await pw.chromium.connectOverCDP({
		wsEndpoint: 'wss://cloud.testingbot.com?key=632723b35f62cc763bfa1a3ac2cc8804&secret=9790eafb8ab2bb3f48bfa631a9184c64&browserName=chrome&browserVersion=latest',
	});
	const context = await browser.newContext();
	page = await context.newPage();
*/
	await navigate.firstPost(page);
	await header.goHome(page);
	await expect(page).toHaveURL("https://www.redsauce.net/blog/en");
	//await browser.close();
});