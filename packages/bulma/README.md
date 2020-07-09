<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/mowses/rjsf-bulma">
    <img src="https://github.com/mowses/rjsf-bulma/blob/master/bulma-logo.png" alt="Logo" width="640" height="160">
  </a>

  <h3 align="center">@rjsf/bulma</h3>

  <p align="center">
  Bulma CSS theme, fields and widgets for <a href="https://github.com/mozilla-services/react-jsonschema-form/"><code>react-jsonschema-form</code></a>.
    <br />
    <a href="https://react-jsonschema-form.readthedocs.io/en/latest/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://rjsf-team.github.io/react-jsonschema-form/">View Playground</a>
    ·
    <a href="https://github.com/mowses/rjsf-bulma/issues">Report Bug</a>
    ·
    <a href="https://github.com/mowses/rjsf-bulma/issues">Request Feature</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->

## About The Project

[![rjsf-bulma Screen Shot][product-screenshot]](https://github.com/mowses/rjsf-bulma)

Exports `bulma` theme, fields and widgets for `react-jsonschema-form`.

### Built With

- [react-jsonschema-form](https://github.com/mozilla-services/react-jsonschema-form/)
- [bulma](https://bulma.io/)
- [Typescript](https://www.typescriptlang.org/)

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- `bulma >= 0.9.0`
- `@rjsf/core >= 2.1.0`

```bash
yarn add bulma @rjsf/core
```

### Installation

```bash
yarn add @rjsf/bulma
```

## Usage

```js
import Form from '@rjsf/bulma';
```

or

```js
import { withTheme } from '@rjsf/core';
import { Theme as BulmaTheme } from '@rjsf/bulma';

const Form = withTheme(BulmaTheme);
```

[contributors-url]: https://github.com/mowses/rjsf-bulma/graphs/contributors
[license-shield]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: https://choosealicense.com/licenses/mit
[product-screenshot]: https://raw.githubusercontent.com/mowses/rjsf-bulma/master/print1.png