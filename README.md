# vue-custom-flag-country

A customizable Vue.js component for displaying country flags with flexible options for styling and integration.

## Features

- Display country flags using ISO country codes
- Easily customizable styles and sizes
- Lightweight and dependency-free
- Supports accessibility

## Installation

```bash
npm install vue-custom-flag-country
# or
yarn add vue-custom-flag-country
```

## Usage

```js
import VueCustomFlagCountry from 'vue-custom-flag-country';

export default {
  components: {
    VueCustomFlagCountry
  }
}
```

```html
<vue-custom-flag-country country="US" :size="32" :rounded="true" />
```

## Props

| Prop      | Type    | Default | Description                       |
|-----------|---------|---------|-----------------------------------|
| country   | String  | —       | ISO 3166-1 alpha-2 country code   |
| size      | Number  | 24      | Flag size in pixels               |
| rounded   | Boolean | false   | Display flag with rounded borders |

## Accessibility

- Flags include `aria-label` for screen readers.

## License

MIT

## Contributing

Contributions are welcome! Please open issues or pull requests.

## Author

[Global Finreg](https://github.com/GFR-IT/)