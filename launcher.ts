
const args = process.argv.slice(2).map((x) => x.toLowerCase());
import { devices } from '@playwright/test';
import { spawn } from 'node:child_process';

/*
const environment = {
    browser: takeArg(["chromium", "firefox", "safari"]),
    env: takeArg(["local", "remote"])
  }
  
  function takeArg(options) {
    return options.find((option) => args.includes(option)) || options[0];
  }

  console.log(args);*/
/*
const project = 'chromium';
const com = spawn(`npx playwright test --project=${project}`,[], { shell: true });

com.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

com.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

com.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});
*/

const com = spawn('npm run test',[], { shell: true });

com.stdout.on('data', (data) => {console.log(`stdout: ${data}`);});

com.stderr.on('data', (data) => { console.error(`stderr: ${data}`);});

com.on('close', (code) => {console.log(`child process exited with code ${code}`);});

const environment = {
    browser: "firefox"
  }

function browserOptions(browser) {
    switch (browser) {
        case "chromium": return 'Desktop Chrome';
        case "firefox": return 'Desktop Firefox';
        case "safari": return 'Desktop Safari';
        default: return 'Desktop Chrome';
    }
}

function project() {
    return {
        name: environment.browser,
        use: {
            ...devices[browserOptions(environment.browser)],
        },
    }
}

export {project}

