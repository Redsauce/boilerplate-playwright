import * as fs from "fs";
import * as path from "path";

const resultsDirectory = "allure-results";

async function globalSetup() {
	deleteReportFiles();
}

function deleteReportFiles() {
	fs.readdir(resultsDirectory, (err, files) => {
		if (err) { throw err; }
		for (const file of files) {
			fs.unlink(path.join(resultsDirectory, file), (err) => {
				if (err) { throw err; }
			});
		}
	});
}

export default globalSetup;