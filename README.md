# @hellroot/eslint-config

[![npm](https://img.shields.io/npm/v/@hellroot/eslint-config.svg)](https://www.npmjs.com/package/@hellroot/eslint-config)
[![dependencies status](https://img.shields.io/david/hellroot/eslint-config.svg)](https://david-dm.org/hellroot/eslint-config)
[![dev dependencies status](https://img.shields.io/david/dev/hellroot/eslint-config.svg)](https://david-dm.org/hellroot/eslint-config?type=dev)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

An ESLint config for projects written in TypeScript with React.

It is based on [airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) and [@typescript-eslint/recommended](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) configs and compatible with [Prettier](https://prettier.io).

## Installation

```bash
npm install --save-dev prettier eslint @hellroot/eslint-config
```

## Configuration

Extend your ESLint config, select environments which you use and
specify path to right `tsconfig.json` if you are using non-default:

`.eslintrc.js`

```js
const path = require('path');

const tsConfigDir = __dirname;

module.exports = {
  extends: ['@hellroot/eslint-config'],
  env: {
    jest: true,
    node: true,
    browser: true
  },
  parserOptions: {
    project: path.join(tsConfigDir, 'tsconfig.json')
  },
  settings: {
    'import/resolver': {
      typescript: {
        directory: tsConfigDir
      }
    }
  }
};
```

Configure EditorConfig:

`.editorconfig`

```editorconfig
root = true

[*]
charset = utf-8
indent_size = 2
end_of_line = lf
indent_style = space
max_line_length = 100
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false
```

Configure Prettier:

`.prettierrc.json`

```json
{
  "singleQuote": true,
  "trailingComma": "none"
}
```

## Migration

Format all your TypeScript and JavaScript code:

```bash
npx prettier --write '**/*.{js,jsx,ts,tsx}'
```

## VSCode

By default, ESLint plugin validates only `.js` and `.jsx` files.
You should enable `.ts` and `.tsx` manually in your IDE settings:

`settings.json`

```json
"eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "typescriptreact",
      "autoFix": true
    }
]
```
