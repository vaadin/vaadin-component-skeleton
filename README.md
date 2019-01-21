# &lt;vaadin-element&gt;

[&lt;vaadin-element&gt;](https://vaadin.com/components/vaadin-element) is a Web Component providing &lt;element-functionality&gt;, part of the [Vaadin components](https://vaadin.com/components).

[Live Demo ↗](https://vaadin.com/components/vaadin-element/html-examples)
|
[API documentation ↗](https://vaadin.com/components/vaadin-element/html-api)

[![npm version](https://badgen.net/npm/v/@vaadin/vaadin-element)](https://www.npmjs.com/package/@vaadin/vaadin-element)
[![Bower version](https://badgen.net/github/release/vaadin/vaadin-element)](https://github.com/vaadin/vaadin-element/releases)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/vaadin/vaadin-element)
[![Build Status](https://travis-ci.org/vaadin/vaadin-element.svg?branch=master)](https://travis-ci.org/vaadin/vaadin-element)
[![Coverage Status](https://coveralls.io/repos/github/vaadin/vaadin-element/badge.svg?branch=master)](https://coveralls.io/github/vaadin/vaadin-element?branch=master)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/vaadin/web-components?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Published on Vaadin Directory](https://img.shields.io/badge/Vaadin%20Directory-published-00b4f0.svg)](https://vaadin.com/directory/component/vaadinvaadin-element)
[![Stars on vaadin.com/directory](https://img.shields.io/vaadin-directory/star/vaadin-element-directory-urlidentifier.svg)](https://vaadin.com/directory/component/vaadinvaadin-element)
<!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="vaadin-element.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<vaadin-element>
  ...
</vaadin-element>
```

[<img src="https://raw.githubusercontent.com/vaadin/vaadin-element/master/screenshot.png" width="200" alt="Screenshot of vaadin-element">](https://vaadin.com/components/vaadin-element)


## Installation

The Vaadin components are distributed as Bower and npm packages.
Please note that the version range is the same, as the API has not changed.
You should not mix Bower and npm versions in the same application, though.

Unlike the official Polymer Elements, the converted Polymer 3 compatible Vaadin components
are only published on npm, not pushed to GitHub repositories.

### Polymer 2 and HTML Imports compatible version

Install `vaadin-element`:

```sh
bower i vaadin/vaadin-element --save
```

Once installed, import it in your application:

```html
<link rel="import" href="bower_components/vaadin-element/vaadin-element.html">
```
### Polymer 3 and ES Modules compatible version


Install `vaadin-element`:

```sh
npm i @vaadin/vaadin-element --save
```

Once installed, import it in your application:

```js
import '@vaadin/vaadin-element/vaadin-element.js';
```

## Getting started

Vaadin components use the Lumo theme by default.

To use the Material theme, import the correspondent file from the `theme/material` folder.

## Entry points

- The component with the Lumo theme:

  `theme/lumo/vaadin-element.html`

- The component with the Material theme:

  `theme/material/vaadin-element.html`

- Alias for `theme/lumo/vaadin-element.html`:

  `vaadin-element.html`


## Running demos and tests in a browser
Ensure you have [npm](https://www.npmjs.com/) and [Bower](https://bower.io) installed.


Clone the `vaadin-element` repository.
```bash
$ git clone https://github.com/vaadin/vaadin-element.git
```

Change into the `vaadin-element` directory.
```bash
$ cd vaadin-element
```

Install the dependencies.
```bash
$ npm install
$ bower install
```

Launch a webserver to serve the demo & tests.
```bash
$ npm start
```

View the demos at:

1. Make sure you have [npm](https://www.npmjs.com/) and [Bower](https://bower.io) installed.

Run the tests:

[http://127.0.0.1:3000/components/vaadin-element/test](http://127.0.0.1:3000/components/vaadin-element/test)

View local version of API documentation:

[http://127.0.0.1:3000/](http://127.0.0.1:3000/)

  - http://127.0.0.1:3000/components/vaadin-element/demo
  - http://127.0.0.1:3000/components/vaadin-element/test


## Running tests from the command line

1. When in the `vaadin-element` directory, run `polymer test`


## Following the coding style

We are using [ESLint](http://eslint.org/) for linting JavaScript code. You can check if your code is following our standards by running `gulp lint`, which will automatically lint all `.js` files as well as JavaScript snippets inside `.html` files.


## Big Thanks

Cross-browser Testing Platform and Open Source <3 Provided by [Sauce Labs](https://saucelabs.com).


## Contributing

  To contribute to the component, please read [the guideline](https://github.com/vaadin/vaadin-core/blob/master/CONTRIBUTING.md) first.


## License

Apache License 2.0

Vaadin collects development time usage statistics to improve this product. For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.
