# Playwright project Boilerplate

  

[Playwright](https://playwright.dev/docs/intro) project boilerplate.

  

## Introduction

  

Expain things

  

## Pre-requisites

  

You need Testingbot credentials to be able tu run some parts of this boilerplate which can be found in your [Account](https://testingbot.com/members/user/edit) page.

  

You have to set the environment variables **`TB_KEY`** and **`TB_SECRET`**. Alternatively, you can search for them in the code and replace them.

  

## Project Setup

  

1. Clone this repository.

2. Install [Node](https://nodejs.org/en/) and make sure npm is installed as well.

3. Install the dependencies using `npm install`.

## Playwright configuration: 

-allure report -> In this case we are using allure report instead of the normal html that playwright creates. With allure we will have a more detailed report including a history if we want.

-GLOBALSETUp:

You will find a file called global-setup.ts, wich is called in playwright.config.ts. This kind of file is used to run
things before all the tests, in this case, we are using it to delete the allure results before running al the tests. We did that because we didnt want to have more files or reports than needed, if you want to change that and have all the collection of reports so you can do a comparisation, you only need to comment the code.



-testingbot here -> also xplain some compatibility problems
globalsetup -> runs before all tests, in this case to delete files that should not be stacked. If want to do a big comparation of tests this shouldchange.


more than one config file?
  

## Test running

  

Playwright has differrent commands to run tests, you can tun a single test, a set of tests or all tests. By default tests are run in a headless manner meaning no browser window will be opened while running the tests and results will be seen in the terminal.

  

You will find more detailed information [here](https://playwright.dev/docs/running-tests).

  

To get started, with the following command you will be able to run all your tests.

  

npx playwright test

  
  

**Note**: To run tests with different options, you will have to look at the documentation and modify the command you are using.

  

Executing that command will run the single example test.

  
  

## Project organization

  

If you have a look at the folder organization, you will find the following:

  

-  **SPECS:**

Inside this folder, you will have all the tests files (specs), those files only have the testing, they don't include any function. From there, you can call any component and use its corresponding functions to automate

**Note**: Inside the specs folder you can add a folder to put some files that you may need to share, such as data ones.

  

-  **COMPONENTS**:

Each part of the web is divided in components, so you can detail each one without mixing them. Inside here usually you will find a folder for each part (examples are shown in the project).

Inside each component, you will have the file for the functions, and also a file where you will write all the selectors/or locators you need to find the elements.

**Note**: When code is repeating or you think that you will use it in another function, a component usually named shared is created. There, you will follow the same file organization, but for things that you will share between other components (data, functions, etc)

In playwright we don't use features, but you can add them. Following the file organization, you will have to create a features folder inside the project.

  

## CI????
