import { test, expect } from "@playwright/test";
import * as home from "../components/home/home";
import * as header from "../components/header/header";

const urls = require("../components/componentsShared/urls");

test("Language change", async ({ page }) => {
	await home.go(page);
	await header.changeToSpanishLang(page);
	await expect(page).toHaveURL(urls.spanish_url);
});