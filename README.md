# React Component for Copyright Notice (`<CopyrightNotice />`)

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
