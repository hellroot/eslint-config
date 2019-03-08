# @hellroot/tslint-config

[![npm](https://img.shields.io/npm/v/@hellroot/tslint-config.svg)](https://www.npmjs.com/package/@hellroot/tslint-config)
[![dependencies status](https://img.shields.io/david/hellroot/tslint-config.svg)](https://david-dm.org/hellroot/tslint-config)
[![dev dependencies status](https://img.shields.io/david/dev/hellroot/tslint-config.svg)](https://david-dm.org/hellroot/tslint-config?type=dev)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

A TSLint config for projects written in TypeScript with React.

It is compatible with [Prettier](https://prettier.io) and consists of rules from:

- [`tslint:recommended`](https://github.com/palantir/tslint/blob/master/src/configs/recommended.ts)
- [`tslint-react`](https://github.com/palantir/tslint-react)
- [`tslint-config-prettier`](https://github.com/prettier/tslint-config-prettier)

## Installation

```bash
npm install --save-dev prettier tslint @hellroot/tslint-config
```

## Configuration

Extend your TSLint config:

`tslint.json`

```json
{
  "extends": ["@hellroot/tslint-config"]
}
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
