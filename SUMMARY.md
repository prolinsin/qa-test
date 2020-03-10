# Srđan Prole

## GOALS

- I tried to cover all the acceptance criteria in task
- Everything is structured into POM and made like it is going to be expand
- Cover most of the application with tests
- I tried to keep tests as small as possible and to have them easy to read and understand

## ASSUMPTION

- I tried to not spend a lot of time on in-depth testing, but I tried to give you insights into mine capabilities

## TEST APPROACH

1. First I setup project and run it locally
2. Then I stared with inspection of an application
3. I introduce myself more into project, db, how things are served, and I stared to compose testing plan
4. I decided to separate application in some separate test, but I was still fallowing your acceptance criteria
5. I stated with writing test but keeping things in mind like it is going to be expand with more functionalities
6. For tests I tried to not hard code anything, so tests are easy to maintain by just changing POMs
7. After big portion of application was covered with test I searched and implement HTML reporting you can find it after. You need to instal module for it, so do _npm i_ .
   `After tests are run report can be found in TestReport.html`
8. After it I modified package.json script to enable running of parallel test (I setup it for 2 chrome instance currently, but it can easily be changed to run simultaneously on other browsers also or for test to be run on more browsers) - I did that this as a new script because HTML reporting is not working with multiple instances of a browser

```
npm run start:parallel
```

9. After everything I went one more time through code and refactor a couple of things

## TEST ENVIRONMENT

- Tests are executed on chrome machine but I tried it also on firefox and it works, but didn't want to commit that part in protractor.conf.js

## ABOUT PROTRACTOR

- I just tried a couple of features of protractor before this task so I must say it was new and fun to me. After using it for a couple of hours I felt OK and familiar with it. Protractor have some ups and sometimes it felt great when writing tests but sometimes I felt so frustrated and was like omg this is in Testcafe or Cypress more logical :)

# CONCLUSION

- Fun task. I tried to do the job like how I think things needs to be done and I tried to represent me through this coding challenge, and I hope we are on same track :)
  BTW one test is failing...display one single page is not correct :P
