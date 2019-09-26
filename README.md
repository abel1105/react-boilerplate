# React Boilerplate

Base on: [Create React App](https://github.com/facebook/create-react-app)

## Features

1. [Prettier on IDE and git pre-commit hook](#1-prettier-and-lint)
2. [CSS module and SASS](#2-css-module-with-sass)
3. [Redux and support multiple reducers](#3-redux)
4. [React router with Google Analytics track](#4-router-with-ga)
5. [Travis for deploy on Github page](#5-travis-gh-pages-deploy)
6. [Absolute import for SASS and JS](#6-absolute-import)
7. Useful package:
    - [classnames](https://github.com/JedWatson/classnames)
    - [normalize.css](https://github.com/necolas/normalize.css)
     
## Future support

- [ ] Typescript

## Feature description

### 1. Prettier and Lint

> Tag: prettier, eslint, lint-staged, husky 

Prettier config can be found at `.prettierrc`. 
All prettier rules has been set to `warn` in `package.json > eslintConfig > rules`
so that prettier error will not block the `npm run dev` when you're developing.

If you want at other eslint config 
(like [airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb))
 please directly add inside `package.json > eslintConfig`

### 2. CSS module with SASS

> Tag: css-module, sass

All component style file should be named as `*.module.scss` or `*.module.sass`,
then all the feature from [sass](https://github.com/sass/sass) 
and [css-module](https://github.com/css-modules/css-modules) can be supported.

### 3. Redux

> Tag: redux, redux-devtools, combineReducers 

All redux related code has been placed inside `src/store`. Visit 
[redux](https://github.com/reduxjs/redux) for more best practice details.

### 4. Router with GA

> Tag: react-router, google-analytics

Using HashRouter to avoid 404 error when refresh page on SPA.

Please add your google analytics tracking id(`UA-XXXXXXXXX-X`) in 
`.env > REACT_APP_GOOGLE_ANALYTICS_ID`, after you added 
will see something like this `REACT_APP_GOOGLE_ANALYTICS_ID=UA-XXXXXXXXX-X`   

### 5. Travis gh-pages deploy

> Tag: travis, gh-pages

Steps:
1. Add a branch `gh-pages` in your repository and push it to Github. When you finished
 github will automate activate github page feature for you.
2. Check your github page url inside your repo setting on Github, then update it on the 
`package.json > homepage`. Make sure the last character of url should not have slash(`/`)
3. Sign in [Travis](https://travis-ci.org/) and enable integration of your repository
4. Generate a [Github Personal Access Token](https://github.com/settings/tokens) for Travis,
only need to check `repo` scope. Remember this token can use in multiple repos. 
5. Add Environment Variables inside your repo travis setting page. The environment variable key
should be `GITHUB_TOKEN` and value is the token you created on last step.
6. [Create a release](https://help.github.com/en/articles/creating-releases) in Github 
then Travis will help you deploy on Github page.
7. Visit your url after Travis finished the job. Hooray!

### 6. Absolute Import

> Tag: import, IDE

You can directly use `import App from 'components/App';` to import component and
 `@import 'styles/_variable.scss';` to import sass variable. But however your IDE
  will not auto resolve it. 

#### Webstorm IDE

1. Go to **Preference > Directories** and mark the **src** directory as a **Resources Root**
2. go to **Preference > Editor > Code Style > JavaScript > Imports tab** and 
    tick **Use paths relative to the project, resource or sources roots.**

#### VS Code

No need to do other setting, it can read `jsconfig.json` automatic. We have predefined for you.
