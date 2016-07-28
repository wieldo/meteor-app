# meteorApp
This is an example of Module Meteor Application on angular2-now with packages below

## What's inside

- simple Chat - https://github.com/wieldo/simple-chat,
- formly Material - https://github.com/wieldo/formlyMaterial/,
- angular2-now - https://github.com/pbastowski/angular2-now,
- angular babel - https://github.com/pbastowski/angular-meteor-babel,
- angular material design - https://material.angularjs.org/latest/,
- angular-templates - https://docs.angularjs.org/guide/templates,
- pbastowski:angular-templates - https://atmospherejs.com/pbastowski/angular-templates,
- angular formly types defined - http://docs.angular-formly.com/,
- angular ui router - https://github.com/angular-ui/ui-router/,
- angular messages - https://docs.angularjs.org/api/ngMessages/directive/ngMessages,
- aldeed:collection2 - https://github.com/aldeed/meteor-collection2,
- Angular marked - https://github.com/Hypercubed/angular-marked,
- Anti:fake Random text and data generator - https://atmospherejs.com/anti/fake,
- ApiCheck - https://github.com/kentcdodds/api-check,
- material design iconic font - http://zavoloklom.github.io/material-design-iconic-font/index.html,
- Fourseven Sass for Meteor - https://github.com/fourseven/meteor-scss,
- PostCSS-SCSS - https://github.com/postcss/postcss,
- AutoPrefixer - https://github.com/postcss/autoprefixer,
- aldeed:simple-schema - Meteor Simple Schema - https://github.com/aldeed/meteor-simple-schema,
- Transform your collections with helpers that you define - https://atmospherejs.com/dburles/collection-helpers,
- mdg:validated-method - A simple wrapper to meteor methods - https://github.com/meteor/validated-method,
- necolas normalize.css - https://github.com/necolas/normalize.css/,
- underscore - http://underscorejs.org/,
- momentjs - http://momentjs.com/

## Install
```
meteor remove ecmascript blaze-html-templates
meteor npm install --save angular angular-meteor angular-ui-router angular2-now underscore
meteor remove standard-minifier-css
meteor add juliancwirko:postcss dburles:collection-helpers mdg:validated-method
meteor add modules angular-templates pbastowski:angular-babel angularui:angular-ui-router angular:angular-material
meteor add angular:angular-messages formly:angular-formly wieldo:api-check aldeed:collection2 aldeed:simple-schema
meteor add ixdi:material-design-iconic-font fourseven:scss anti:fake
npm install --save autoprefixer postcss-scss normalize.css moment semver
npm install --save eslint angular-marked babel-eslint
npm install eslint@1.x babel-eslint@5 --save
npm install eslint@2.x babel-eslint@6 --save
```

## How to run
```
meteor run
```

## JS Conventions
http://eslint.org/  
http://www.w3schools.com/js/js_conventions.asp
- Always use 4 spaces for indentation of code blocks
- we use camelCase for identifier names (variables and functions)
- we use CamelCase for classes
- Always end a simple statement with a semicolon
- Do not end a complex statement with a semicolon
- Don't start names with a $ sign. It will put you in conflict with many JavaScript library names
- JSON strings must be double quoted

## Versioning
- Semantic Versioning 2.0.0 http://semver.org/

Given a version number MAJOR.MINOR.PATCH, increment the:  

MAJOR version when you make incompatible API changes,  
MINOR version when you add functionality in a backwards-compatible manner, and  
PATCH version when you make backwards-compatible bug fixes.  
Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

##### FAQ
How should I deal with revisions in the 0.y.z initial development phase?  
>The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

>If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## Markdown
- When you do want to insert a new line using Markdown, you end a line with two or more spaces, then type return

## GIT Commit
- AngularJS Git Commit Message Conventions https://gist.github.com/stephenparish/9941e89d80e2bc58a153
- http://karma-runner.github.io/0.10/dev/git-commit-msg.html

## File structure
```
/client
/imports
  /api
  /modules
    /forms
    /todo
  /navigation
  /startup
    /client
      /app
    /server
  /ui
    /forms
      /docs
      /lib
      /types
    /md
    /scss
    /sidenav
/server
package.js
```

## Road map

### Dashboard
Start page

### Chat
Chat with your friends

### Crypto
Encrypt your collection data

### Forms
angular formly type examples:
- [x] checkbox
- [x] chips
- [x] datepicker
- [x] input
- [x] radio
- [x] select
- [x] slider
- [x] switch
- [x] textarea

### Todo
Collections
- [x] List
- [x] Edit
- [x] Update
- [x] Remove

### Sign in
Sign in to MeteorApp
- [x] Form
- [x] Change state after sign in

### Sign up
Sign up in MeteorApp
- [x] Form
- [ ] Send email
- [ ] Verify email
- [ ] Completed

## Licence

The MIT License (MIT)
Copyright (c) 2016 Wieldo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Donate
<div>
If you want to help create this example donate, please.
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="V98VLPSG6NQA6">
<input type="image" src="https://www.paypalobjects.com/en_US/PL/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>
</div>
