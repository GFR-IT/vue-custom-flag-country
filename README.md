# vue-custom-flag-country

A customizable Vue 3 component for displaying country flags with flexible sizing and styling options.  
Flags are dynamically imported and rendered as SVGs using ISO country codes.

## ✨ Features

- Display flags using ISO 3166-1 alpha-2 country codes
- Lightweight and dependency-free (pure SVG)
- Flexible sizing:
  - `size` (square)
  - `width` + `height` (rectangular)
- Optional rounded flags (perfect for circular avatars)
- Accessibility: `aria-label` automatically added with country code

---

## 📦 Installation

```bash
npm install vue-custom-flag-country
# or
yarn add vue-custom-flag-country


## Usage

```js
<script setup>
import { CountryFlag } from 'vue-custom-flag-country'
</script>

<template>
  <!-- Square flag -->
  <CountryFlag country="us" :size="32" />

  <!-- Rectangular flag -->
  <CountryFlag country="gb" :width="26" :height="20" />

  <!-- Rounded flag -->
  <CountryFlag country="se" :size="40" :rounded="true" />
</template>
```

## Props

| Prop      | Type    | Default | Description                                                              |
|-----------|---------|---------|------------------------------------------------------------------------- |
| country   | String  | —       | Required. ISO 3166-1 alpha-2 country code (e.g., us, gb, se).            |
| size      | Number  | —       | Sets both width & height (square). Ignored if width/height are provided. |
| width     | Number  | —       | Explicit flag width in pixels.   |
| height    | Number  | —       | Explicit flag height in pixels.   |
| rounded   | Boolean | false   | Renders the flag as a circle (useful for avatars).   |
| class     | String  | —       | Extra CSS classes applied to the flag wrapper.   |

## Accessibility

- Each flag automatically gets an aria-label with the country code (e.g. aria-label="US").
- This ensures flags are readable by screen readers..

## License

MIT

## Contributing

Contributions are welcome! Please open issues or pull requests.

## Author

[Global Finreg](https://github.com/GFR-IT/)