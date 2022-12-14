# Playwright project Boilerplate

[Playwright](https://playwright.dev/docs/intro) project boilerplate to get started. Inside this project you will find a sample test made on the blog.

## Introduction
  

## Pre-requisites

You need Testingbot credentials to be able tu run some parts of this boilerplate which can be found in your [Account](https://testingbot.com/members/user/edit) page.

You have to set the environment variables **`TB_KEY`** and **`TB_SECRET`**. Alternatively, you can search for them in the code and replace them.

## Project Setup

1. Clone this repository.
2. Install [Node](https://nodejs.org/en/) and make sure npm is installed as well.
3. Install the dependencies using `npm install`.

## Test running

Playwright has different commands to run tests, you can run a single test, a set of tests or all tests. By default tests are run in a headless manner meaning no browser window will be opened while running the tests.

You will find more detailed information [here](https://playwright.dev/docs/running-tests).

To get started, with the following command you will be able to run all your tests.

	npm run test


**Note**: This command is specified in the _package.json_ file, to run tests with different options you will have to look at the documentation and modify the command you are using.

## Folder organization

If you have a look at the folder organization, you will find the following:

-  **SPECS:**

Inside this folder, you will have all the tests files (specs), those files only have the testing, they don't include any function. From there, you can call any component and use its corresponding functions to automate.

**Note**: Inside the specs folder you can add a folder to put some files that you may need to share, such as data ones.

-  **COMPONENTS**:

Each part of the web is divided in components, so you can detail each one without mixing them. Inside here usually you will find a folder for each part (examples are shown in the project).

Inside each component, you will have the file for the functions or objects, and also a file where you will write all the selectors/or locators you need to find the elements.

**Note**: When code is repeating or you think that you will use it in another function, a component usually named shared is created. There, you will follow the same file organization, but for things that you will share between other components (data, functions, etc).

In playwright we don't use features, but you can add them. Following the file organization, you will have to create a features folder inside the project.

## Testing bot

Inside this boilerplate you will also find a test that runs using testingbot. Testing bot and playwright configuration are not fully compatible, so to set up testingbot a special function was created to generate the specific browser and context.

To run the test, inside the playwright configuration file you only need to have one project, which has to match the one you are using with the testingbot endpoint. If the configuration has more than one project the test that runs with testingbot will fail.

This integration is a work in progress, testingbot is in its first stages with playwright so there are some things that may not work as expected.

## ESLint

This project uses ESLint to statically analyze the code and quickly find problems. All the eslint specification can be found in the *.eslintrc.json* file.

Run eslint:

	npm run lint

Quickly fix problems that were found

	npm run lint:fix

**Note**: This commands can be found inside *package.json*, to run lint with different options you have to look at their official [documentation](https://eslint.org/docs/latest/user-guide/command-line-interface). 

## Report

The project uses *Allure reports* to provide test reporting functionalities, the specification can be found in the playwright config file. When running tests, a folder called allure-results will be created automatically, after that, to actually see the results you will have to run the following commands.

Generate Allure report:

	npx allure generate ./allure-results --clean

Open Allure report:

	npx allure open ./allure-report

**Note**: In the global-setup file we have added a function so that whenever you run the tests, the contents of the folder will be removed. If you want to have all the reports to be able to make a comparison, you only have to comment or remove that code as specified.

## Workflow

The project uses *Github Actions* and *Gitlab CI* to run playwright tests and eslint when an update is made to the main branch of the repository.

As mentioned above, we use environment variables to run some tests. For the tests to work on workflows you'll need to configure the environment variables within each git.