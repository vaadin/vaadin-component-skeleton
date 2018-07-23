[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/vaadin/vaadin-element)
[![Build Status](https://travis-ci.org/vaadin/vaadin-element.svg?branch=master)](https://travis-ci.org/vaadin/vaadin-element)
[![Coverage Status](https://coveralls.io/repos/github/vaadin/vaadin-element/badge.svg?branch=master)](https://coveralls.io/github/vaadin/vaadin-element?branch=master)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/vaadin/web-components?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

 [![Published on Vaadin  Directory](https://img.shields.io/badge/Vaadin%20Directory-published-00b4f0.svg)](https://vaadin.com/directory/component/vaadinvaadin-element)
[![Stars on vaadin.com/directory](https://img.shields.io/vaadin-directory/star/vaadin-element-directory-urlidentifier.svg)](https://vaadin.com/directory/component/vaadinvaadin-element)


# &lt;vaadin-element&gt;

[Live Demo ↗](https://vaadin.com/components/vaadin-element/html-examples)
|
[API documentation ↗](https://vaadin.com/components/vaadin-element/html-api)


[&lt;vaadin-element&gt;](https://vaadin.com/components/vaadin-element) is a Web Component providing &lt;element-functionality&gt;, part of the [Vaadin components](https://vaadin.com/components).

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
<link rel="import" href="bower_components/vaadin-button/vaadin-button.html">
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

To use Material theme, import the correspondent file from `material` folder.

## Entry points

  Unstyled component.

- `src/component-name.html`

  Component with Lumo theme.
- `theme/lumo/component-name.html`

  Component with Material theme.

- `theme/material/component-name.html`

  Alias for theme/lumo/component-name.html

- `component-name.html`


## Running demos and tests in browser

1. Fork the `vaadin-element` repository and clone it locally.

1. Make sure you have [npm](https://www.npmjs.com/) installed.

1. When in the `vaadin-element` directory, run `npm install` and then `bower install` to install dependencies.

1. Make sure you have [polymer-cli](https://www.npmjs.com/package/polymer-cli) installed globally: `npm i -g polymer-cli`.

1. Run `polymer serve --open`, browser will automatically open the component API documentation.

1. You can also open demo or in-browser tests by adding **demo** or **test** to the URL, for example:

  - http://127.0.0.1:8080/components/vaadin-element/demo
  - http://127.0.0.1:8080/components/vaadin-element/test


## Running tests from the command line

1. When in the `vaadin-element` directory, run `polymer test`


## Following the coding style

We are using [ESLint](http://eslint.org/) for linting JavaScript code. You can check if your code is following our standards by running `gulp lint`, which will automatically lint all `.js` files as well as JavaScript snippets inside `.html` files.


## Contributing

  - Make sure your code is compliant with our code linters: `gulp lint`
  - Check that tests are passing: `polymer test`
  - [Submit a pull request](https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github) with detailed title and description
  - Wait for response from one of Vaadin components team members


## License

Apache License 2.0

Vaadin collects development time usage statistics to improve this product. For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.
