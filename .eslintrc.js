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

const jsExtensions = ['.js', '.jsx'];
const tsExtensions = ['.ts', '.tsx'];
const assetsExtensions = ['jpg', 'jpeg', 'png', 'svg', 'css', 'scss', 'json'];

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
    react: { version: 'detect' },
    'import/extensions': jsExtensions.concat(tsExtensions),
    'import/parsers': { '@typescript-eslint/parser': tsExtensions },
    'import/ignore': ['node_modules', `\\.(${assetsExtensions.join('|')})$`],
    'import/resolver': { node: { extensions: jsExtensions.concat(tsExtensions) } }
  }
};
