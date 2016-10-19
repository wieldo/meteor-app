# meteorApp

[![GitHub version](https://badge.fury.io/gh/wieldo%2Fmeteor-app.svg)](https://badge.fury.io/gh/wieldo%2Fmeteor-app)
[![GitHub issues](https://img.shields.io/github/issues/wieldo/meteor-app.svg)](https://github.com/wieldo/meteor-app/issues)
[![GitHub forks](https://img.shields.io/github/forks/wieldo/meteor-app.svg)](https://github.com/wieldo/meteor-app/network)
[![GitHub stars](https://img.shields.io/github/stars/wieldo/meteor-app.svg)](https://github.com/wieldo/meteor-app/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/wieldo/formlyMaterial/master/LICENSE)
[![Gitter join](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/wieldo/meteor-app-example)

This is an example of module Meteor Application on angular2-now with packages below.
It consists clients and developers states where developers is created to help develop meteorApp and clients
to manage todos or tasks.

## Table of contents
* [Packages](#Packages)
* [Install](#install)
* [How to run](#how-to-run)
* [JS Conventions](#js-conventions)
* [Versioning](#versioning)
* [Git commit](#git-commit)
* [Folder structure](#folder-structure)
* [Road map](#road-map)
* [Licence](#licence)
* [Donate](#donate)

## Demo
http://meteor-app.wieldo.com/

## Packages

Wieldo
- formly Material - https://github.com/wieldo/formlyMaterial/,
- simple Chat - https://github.com/wieldo/simple-chat

Basic
- accounts-base - https://atmospherejs.com/meteor/accounts-base,
- angular-marked - https://github.com/Hypercubed/angular-marked,
- angular-templates - https://atmospherejs.com/meteor/angular-templates,
- angular2-now - https://github.com/pbastowski/angular2-now,
- angular:angular-material - https://atmospherejs.com/angular/angular-material,
- angular:angular-messages - https://atmospherejs.com/angular/angular-messages,
- angularui:angular-ui-router - https://atmospherejs.com/angularui/angular-ui-router,
- anti:fake - https://atmospherejs.com/anti/fake,
- api-check - https://github.com/kentcdodds/api-check,
- crypto-js - https://github.com/sytelus/CryptoJS,
- fullcalendar - https://atmospherejs.com/fullcalendar/fullcalendar,
- mdg-validation-error - https://atmospherejs.com/mdg/validation-error,
- mdg:validated-method - https://github.com/meteor/validated-method,
- pbastowski:angular-babel - https://github.com/pbastowski/angular-meteor-babel,
- pbastowski:angular-templates - https://atmospherejs.com/pbastowski/angular-templates,
- underscore - http://underscorejs.org/

Forms
- angular formly - http://angular-formly.com/,

CSS, Icons
- AutoPrefixer - https://github.com/postcss/autoprefixer,
- Fourseven Sass for Meteor - https://github.com/fourseven/meteor-scss,
- material design iconic font - http://zavoloklom.github.io/material-design-iconic-font/index.html,
- necolas normalize.css - https://github.com/necolas/normalize.css/,
- PostCSS-SCSS - https://github.com/postcss/postcss,

Time
- momentjs:moment - https://atmospherejs.com/momentjs/moment,  

JSON
- jsfy - https://github.com/simone-sanfratello/jsfy  

Collections
- aldeed:collection2 - https://github.com/aldeed/meteor-collection2,
- aldeed:schema-deny - https://github.com/aldeed/meteor-schema-deny
- aldeed:simple-schema - https://github.com/aldeed/meteor-simple-schema,
- dburles:collection-helpers - https://atmospherejs.com/dburles/collection-helpers,

## Install
```
# clone repo
git clone https://github.com/wieldo/meteor-app.git

# go to cloned directory
cd meteor-app

# install npm packages
npm install

```

## How to run
```
meteor run

# open browser with http://localhost:3000
```

## JS conventions
http://eslint.org/
- eslint:recommended

http://www.w3schools.com/js/js_conventions.asp
- Always use 4 spaces for indentation of code blocks
- we use camelCase for identifier names (variables and functions)
- we use CamelCase for classes
- Always end a simple statement with a semicolon
- Do not end a complex statement with a semicolon
- Don't start names with a $ sign. It will put you in conflict with many JavaScript library names
- JSON strings must be double quoted

## Versioning
Semantic Versioning 2.0.0 http://semver.org/

**Given a version number MAJOR.MINOR.PATCH, increment the:**   
MAJOR version when you make incompatible API changes,  
MINOR version when you add functionality in a backwards-compatible manner, and  
PATCH version when you make backwards-compatible bug fixes.  
Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**   
How should I deal with revisions in the 0.y.z initial development phase?  
>The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

>If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## GIT commit
- AngularJS Git Commit Message Conventions https://gist.github.com/stephenparish/9941e89d80e2bc58a153
- http://karma-runner.github.io/0.10/dev/git-commit-msg.html

## Folder structure   
This project is using bundle folder structure and every module should act like independent.
It means that it has got own folders api, client, styles that are useful for only that bundle.

**app/**
```
meteor-app/
 └──app/                                    * app module folder
     ├──config/                             * configuration for app
     ├──developers/                         * here are placed files that help create module todo, calendar and are useful for programmers
     ├──helpers/                            * helpers for all components
     ├──sign/                               * sign component
     ├──app.component.js                    * app component
     ├──app.module.js                       * app module
     ├──app.navigation.js                   * json for navigation
     ├──app.view.html                       * app component view
     ├──core.module.js                      * core module with angular-meteor, angular-storage and routingModule
     ├──index.js                            * export everything from app module
     ├──modules.js                          * import and export every available module
     ├──routing.module.js                   * routerModule that contains angular-ui-router
     └──run.js                              * default run for app module
```
**client/, server/, developers/**
```
meteor-app/
 ├──client/                                 * client entry point, imports all client code
 |   ├──main.html                           * main html code with app tag
 |   ├──main.js                             * import main.scss, startup files, scss from other packages
 |   └──main.scss                           * import scss startup file(s)
 ├──server/                                 * server entry point, imports all server code
 |    └──main.js                            * import all server code
 └──developers/                             * here are placed files that help create module todos, calendar and are useful for programmers

 ```

 **module example**
 ```
 meteor-app/
 ├──imports/                                           * all module files are placed here
 |   ├──clients/                                       * here are placed packages like todo, calendar etc. modules
 │   │   ├──dashboard/                                 * module and index file to export
 |   |   |   ├──client/
 |   |   |   |   ├──dashboard.component.js             * default component
 |   |   |   |   ├──dashboard.spec.js                  * a simple test of component
 |   |   |   |   ├──dashboard.style.scss               * component scss styles
 |   |   |   |   └──dashboard.view.html                * component default view
 |   |   |   ├──dashboard.module.js                    * dashboard module
 |   |   |   └──index.js                               * export all from module
 │   │   ├──todo/
 │   │   |   ├──api/                                   * here are placed all api files for todo module
 |   |   |   |   |
 |   |   |   |   ├──collections/                       * here are placed files for todo module to manage collections
 |   |   |   |   |   ├──todo.allow.js                  * mongo collection allow
 |   |   |   |   |   ├──todo-attach-schema.js          * attach schema to todo collection
 |   |   |   |   |   ├──todo.collection.js             * exported mongo collection
 |   |   |   |   |   └──index.js                       * export all from collection
 |   |   |   |   ├──methods/                           * here are placed all api methods
 |   |   |   |   |   ├──index.js                       * export all from methods
 |   |   |   |   |   ├──todo.insert.js                 * todo insert method
 |   |   |   |   |   ├──todo.remove.js
 |   |   |   |   |   └──todo.update.js
 |   |   |   |   ├──server/                            * here are placed all server code for todo module
 |   |   |   |   |   ├──todo.fixtures.js               
 |   |   |   |   |   ├──index.js                       * export all from server
 |   |   |   |   |   └──todo.publish.js                * all publications for todo are placed here or in folder publish
 |   |   |   |   ├──index.js                           * export all from api
 |   |   |   |   └──schemas.js                         *
 |   |   |   ├──client/
 |   |   |   |   └──index.js
 |   |   |   ├──sort/                                  * sub component of todo module to sort list
 |   |   |   |   ├──client/
 |   |   |   |   |   └──index.js
 |   |   |   |   ├──sort.component.js
 |   |   |   |   ├──sort.service.js
 |   |   |   |   ├──sort.style.scss
 |   |   |   |   └──sort.view.html
 |   |   |   ├──index.js                               * export module todo
 |   |   |   ├──todo.component.js
 |   |   |   ├──todo.module.js
 |   |   |   ├──todo.service.js
 |   |   |   ├──todo.state.js
 |   |   |   ├──todo.style.scss
 |   |   |   └──todo.view.html
 |   |   └──index.js                                   * export all from clients
```
## Road map

### Dashboard
Start page
- [ ] Statistics
- [ ] Charts

### Calendar
- [ ] Events

### Chat
Chat with your friends
- [ ] Chat on room
- [x] Chat user - user

### Create dialog
- [ ] Events
- [ ] Tasks
- [x] Todos

### Crypto
Encrypt your collection data with crypto-js library
- [x] Decrypt example
- [x] Encrypt example
- [x] Example with formly material

### Events
- [ ] Form
- [ ] Display on calendar
- [ ] Remove
- [ ] Update

### Task
- [ ] Console debug
- [ ] Create new
- [ ] Decrypt
- [ ] Description
- [ ] Display list
- [ ] Due date from events
- [ ] Edit
- [ ] Edit in line
- [ ] Encrypt
- [ ] Filter by people
- [ ] Filter by status
- [ ] Form
- [ ] Map location
- [ ] Paging
- [ ] Permissions
- [ ] Remove (as updated removed field)
- [ ] Sort list
- [ ] Search
- [ ] Todos as completed
- [ ] Update
- [ ] Updates history

### Todo
- [x] Console debug
- [x] Create new
- [x] Display list
- [ ] Decrypt
- [x] Edit
- [ ] Edit in line
- [ ] Encrypt
- [x] Filter by people
- [x] Filter by status
- [x] Form
- [ ] Paging
- [x] Remove (as updated removed field)
- [x] Sort list
- [ ] Search
- [x] Update
- [x] Update history name

### Settings
Set some things
- [ ] Manage profile photo
- [ ] Update user data


### Sign in
- [x] Change state after sign in
- [x] Console debug
- [x] Form

### Sign up
- [x] Birthday
- [x] Console debug
- [ ] Create private and public key
- [x] Gender
- [x] Form
- [ ] Send email
- [x] Verify email both sides
- [x] Verify password

### Users
- [ ] Decrypt
- [ ] Edit
- [ ] Encrypt
- [ ] Invites
- [ ] Roles
- [ ] Update
- [ ] Remove from invites

### Developers navigation
- [ ] Few examples of navigationComponent

## Licence

The MIT License (MIT)
Copyright (c) 2016 Wieldo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Donate
If you want to help our developers create software donate please.  

[![](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=V98VLPSG6NQA6)
