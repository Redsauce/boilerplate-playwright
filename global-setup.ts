import * as fs from "fs";
import * as path from "path";
const resultsDirectory = "allure-results";

async function globalSetup() {
	// deletes all files inside allure-results so the new ones can be added
	fs.readdir(resultsDirectory, (err, files) => {
		if (err) throw err;
		for (const file of files) {
			fs.unlink(path.join(resultsDirectory, file), (err) => {
				if (err) throw err;
			});
		}
	});

}
export default globalSetup;