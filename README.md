# React Component for Copyright Notice (`<CopyrightNotice />`)

[![codecov](https://codecov.io/gh/mooniker/react-copyright-notice-component/branch/master/graph/badge.svg)](https://codecov.io/gh/mooniker/react-copyright-notice-component)
[![Coverage Status](https://coveralls.io/repos/github/mooniker/react-copyright-notice-component/badge.svg?branch=master)](https://coveralls.io/github/mooniker/react-copyright-notice-component?branch=master)
[![Known Vulnerabilities](https://snyk.io//test/github/mooniker/react-copyright-notice-component/badge.svg?targetFile=package.json)](https://snyk.io//test/github/mooniker/react-copyright-notice-component?targetFile=package.json)
[![dependencies Status](https://david-dm.org/mooniker/react-copyright-notice-component/status.svg)](https://david-dm.org/mooniker/react-copyright-notice-component)
[![npm version](https://badge.fury.io/js/react-copyright-notice-component.svg)](https://badge.fury.io/js/react-copyright-notice-component)
[![GitHub license](https://img.shields.io/github/license/mooniker/react-copyright-notice-component)](https://github.com/mooniker/react-copyright-notice-component/blob/master/LICENSE) [![Greenkeeper badge](https://badges.greenkeeper.io/mooniker/react-copyright-notice-component.svg)](https://greenkeeper.io/)

Use this component to put a semantic copyright notice on a page with React.

## Getting started

### Installation

```bash
npm install react-copyright-notice-component --save
# or
yarn add react-copyright-notice-component
```

### Usage

For a minimal/generic copyright notice, assuming the current year:

```jsx
<CopyrightNotice></CopyrightNotice>
```

```html
<span class="copyright-notice"
  >&copy;
  <span property="dc:date" datatype="xsd:gYear">2019</span>
</span>
```

Give it more to work with by specifying a copyright holder:

```jsx
<CopyrightNotice copyrightHolder="Michael Bluth"></CopyrightNotice>
```

```html
<span class="copyright-notice"
  ><span>&copy;</span>
  <span property="dc:date" datatype="xsd:gYear">2019</span>
  <span>Michael Bluth</span></span
>
```

...and/or specify the year:

```jsx
<CopyrightNotice copyrightHolder="Michael Bluth" year="2003"></CopyrightNotice>
```

```html
<span class="copyright-notice"
  ><span>&copy;</span>
  <span property="dc:date" datatype="xsd:gYear">2003</span>
  <span>Michael Bluth</span></span
>
```

## Running the tests

```bash
npm test
# or, for a coverage report:
npm run test:coverage
```

## License

This project is licensed under [the MIT License](https://opensource.org/licenses/MIT). See [the LICENSE file](LICENSE) for details.
