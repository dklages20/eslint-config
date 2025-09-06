# @dklages/eslint-config

A shareable ESLint config for TypeScript and JavaScript projects, using stylistic rules and TypeScript support.

## Installation

1. **Install this config and required peer dependencies:**

```sh
npm install --save-dev @dklages/eslint-config eslint @stylistic/eslint-plugin typescript-eslint typescript
```

> **Note:** You may also need other peer dependencies listed in `package.json`:
> - `@eslint/js`
> - `eslint-config-prettier`
> - `eslint-plugin-import`
> - `eslint-plugin-prettier`

2. **Create an ESLint config in your project root:**

For modern ESLint (v9+), create an `eslint.config.js` or `eslint.config.ts`:

```js
import config from '@dklages/eslint-config';
export default config;
```

Or for CommonJS:

```js
module.exports = require('@dklages/eslint-config');
```

3. **Ensure you have a `tsconfig.json` at your project root.**

This config expects a `tsconfig.json` in the root directory. If your TypeScript config is elsewhere, you may need to extend or override the parser options.

## Usage

Run ESLint as usual:

```sh
npx eslint .
```

## Customization

You can extend or override rules by modifying your own ESLint config file.

