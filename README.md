# Cobiro QA Test

## The task

Phase one (2 days):

- Read and understand the acceptance criteria
- Run the project locally using the steps in "Setup the project"
- If you have any questions contact us or go to "Phase two"

Phase two (3 days):

- Create the necessary automation tests to cover the criteria
- Document the results of your findings. This should include, but not limited to, a description and the assertions of the tests.

## Pre requisite

- Node v12.x
- NPM
- JDK

## Setup the project

```
// Fork the repository

// Clone the project
git@github.com:YOUR_GITHUB_USER/qa-test.git

// Change directory into project directory
cd qa-test

// Install the project
npm i

// Run the application
npm start

// Run the mock server
npm run start:server

// Install webdriver
npm install -g webdriver-manager
webdriver-manager update --gecko=false

// If you are unable to run webdriver update do it from your local node_modules
./node_modules/protractor/bin/webdriver-manager update
```

## How to write the tests

This repository uses Protractor for frontend testing (https://www.protractortest.org/).
Within the project we have one sample test written in Typescript and located in e2e/src under the name app.spec.ts
Any test located in this folder and which ends in .spec.ts will be executed when you run the tests.
For this task please feel free to modify/expand or change anything in e2e and the subfolders and feel free to ignore Protractor and test the frontend with other tools if you so desire.

## Run the tests

```
// Start webdriver
webdriver-manager start

// Run all tests
npm test
```

## Acceptance criteria

Our frontenders have developed a new menu structure and it is ready for testing!
This is the design spec for this new functionality: https://xd.adobe.com/view/28004468-172c-41f8-6b22-b719d5d9b0d4-5e31

It should fulfil the following requirements:

- On the main page I should see a tree structure of items
- I should be able to search the tree and be presented with a filtered list
- The filtered list will contain all matched items and their children
- All items will have a call to action that links to a page containing information on the item

## Bonus points

- Test outside acceptance criteria
- Cover search levels 1-3
- Parellelize tests
- Write a step-by-step explanation of how you went about the task
