// global configuration that runs before all the tests

import * as fs from 'fs';
import * as path from 'path';
const directory = 'allure-results';

async function globalSetup() {

    // deletes all files inside allure-results so the new ones can be added
    fs.readdir(directory, (err, files) => {
        if (err) throw err;
        for (const file of files) {
            fs.unlink(path.join(directory, file), (err) => {
                if (err) throw err;
            });
        }
    });
}
export default globalSetup;