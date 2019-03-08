const airbnbOverrides = {
  'no-plusplus': 'off',
  'import/prefer-default-export': 'off',
  'react/prefer-stateless-function': 'off',
  'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }]
};

const tsEslintOverrides = {
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/interface-name-prefix': ['error', 'always']
};

const createReactAppAssets = [
  'bmp',
  'gif',
  'jpg',
  'jpeg',
  'png',
  'webp',
  'svg',
  'css',
  'scss',
  'sass'
];

module.exports = {
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  rules: {
    ...airbnbOverrides,
    ...tsEslintOverrides,
    'prettier/prettier': 'warn'
  },
  settings: {
    'import/extensions': ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
    'import/ignore': ['node_modules', `\\.(${createReactAppAssets.concat('json').join('|')})$`],
    'import/resolver': { node: { extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'] } }
  }
};
