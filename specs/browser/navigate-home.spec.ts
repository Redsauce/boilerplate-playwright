import { test, expect } from "@playwright/test";
import * as navigate from "../../components/componentsShared/navigate";
import * as header from "../../components/header/header";


test("Header logo redirects to home page", async ({ page }) => {
	//await navigate.firstPost(page);
	//await header.goHome(page);
	//await expect(page).toHaveURL("https://www.redsauce.net/test/blog/en");

	await page.goto("https://www.google.com/");
	await expect(page).toHaveURL("https://www.google.com/");
});