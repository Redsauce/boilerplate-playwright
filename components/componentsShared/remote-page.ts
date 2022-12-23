import * as pw from "@playwright/test";

async function createRemotePage() {
	const browser = await pw.chromium.connectOverCDP({
		wsEndpoint: `wss://cloud.testingbot.com?key=${process.env.TB_KEY}&secret=${process.env.TB_SECRET}&platform=WINDOWS&browserName=chrome&browserVersion=latest&name=LanguageChange`,
	});
	const context = await browser.newContext();
	const page = await context.newPage();
	return page;
}

export {createRemotePage};