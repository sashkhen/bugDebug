# bugDebug

blog template

## Pages

- [Articles Listing (homepage)](app/articles-list.njk)
- [Article Example](app/article.njk)
- [Manuals Listing](app/manuals-list.njk)
- [Manual Example](app/manual.njk)

Static strings are stored in /app/includes/[partial]/index.njk files, alongside with temp data and variables.

## To Do:

- manual list scroll spy
- article carousel
- article common elements styling
- reply toggler
- comment submit
- check article responsive
- check auth popup responsive
- check responsive typography
- read also block (article) (mobile)
- loader (articles list)
- popup background

## Build with

Yeoman's [Web app generator](https://github.com/yeoman/generator-webapp)

## Setup Commands

- Run `npm i` to install dependencies
- Run `gulp serve` to preview and watch for changes
- Run `bower install --save <package>` to install frontend dependencies
- Run `gulp serve:test` to run the tests in the browser
- Run `gulp` to build webapp for production
- Run `gulp serve:dist` to preview the production build

## Features

Please see [gulpfile](gulpfile.js) for up to date information on what's supported.

* enable [ES2015 features](https://babeljs.io/docs/learn-es2015/) using [Babel](https://babeljs.io)
* CSS Autoprefixing
* Built-in preview server with BrowserSync
* Automagically compile Sass with [libsass](http://libsass.org)
* Automagically lint your scripts
* Map compiled CSS to source stylesheets with source maps
* Awesome image optimization
* Automagically wire-up dependencies installed with [Bower](http://bower.io)

*For more information on what template can do, take a look at the [gulp plugins](package.json) used in `package.json`.*
