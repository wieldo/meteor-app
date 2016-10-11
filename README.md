# meteorApp

[![GitHub version](https://badge.fury.io/gh/wieldo%2Fmeteor-app.svg)](https://badge.fury.io/gh/wieldo%2Fmeteor-app)
[![GitHub issues](https://img.shields.io/github/issues/wieldo/meteor-app.svg)](https://github.com/wieldo/meteor-app/issues)
[![GitHub forks](https://img.shields.io/github/forks/wieldo/meteor-app.svg)](https://github.com/wieldo/meteor-app/network)
[![GitHub stars](https://img.shields.io/github/stars/wieldo/meteor-app.svg)](https://github.com/wieldo/meteor-app/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/wieldo/formlyMaterial/master/LICENSE)
[![Gitter join](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/wieldo/meteor-app-example)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/wieldo/meteor-app.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)

This is an example of Module Meteor Application on angular2-now with packages below. It is consists of module for clients and developers.

## Demo
http://meteor-app.wieldo.com/

## What's inside

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
meteor remove
           blaze-html-templates
           ecmascript
           standard-minifier-css
meteor npm install --save
           angular
           angular-meteor
           angular-ui-router
           angular2-now
           underscore
meteor add
           aldeed:collection2
           aldeed:schema-deny
           aldeed:simple-schema
           angular:angular-material
           angular:angular-messages
           angularui:angular-ui-router
           anti:fake
           dburles:collection-helpers
           email
           formly:angular-formly
           fourseven:scss
           ixdi:material-design-iconic-font
           jagi:astronomy
           juliancwirko:postcss
           mdg-validation-error
           mdg:validated-method
           modules angular-templates
           pbastowski:angular-babel
           wieldo:api-check
npm install --save
           angular-marked
           autoprefixer
           babel-eslint
           babel-eslint@5
           babel-eslint@6
           crypto-js
           eslint
           eslint@1.x
           eslint@2.x
           jsfy
           moment semver
           normalize.css
           postcss-scss
```

## How to run
```
meteor run
```

## JS Conventions
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

## GIT Commit
- AngularJS Git Commit Message Conventions https://gist.github.com/stephenparish/9941e89d80e2bc58a153
- http://karma-runner.github.io/0.10/dev/git-commit-msg.html

## File structure example   
This project is using bundle folder structure and every module should be independent. It means that it has got own folders api, library, client, styles that are useful for only that module.
```
imports
  /clients
    /modules
      /task
        /client
      /todo
        /api
            collection.js
            fields.js
            schemas.js
            /server
                fixtures.js
                publish.js
        /lib
            index.js
            module.js
        /client
            index.js
            style.scss
            view.html
        /list
            /api
            /lib
            /client
                index.js
                style.scss
                view.html
```

## Road map

### Dashboard
Start page
- [ ] Active
- [ ] Display statistics
- [ ] Charts

### Calendar
- [ ] Display events

### Chat
Chat with your friends
- [ ] Active
- [ ] Chat on room
- [ ] Chat user - user

### Create dialog
- [ ] Events
- [ ] Tasks
- [ ] Todos

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
- [ ] Active
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
