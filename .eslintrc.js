const airbnbOverrides = {
  'class-methods-use-this': 'off',
  'lines-between-class-members': 'off',
  'no-plusplus': 'off',
  'no-param-reassign': 'off',
  'no-restricted-syntax': [
    'error',
    {
      selector: 'ForInStatement',
      message: 'Use Object.{keys,values,entries}, and iterate over the resulting array.'
    },
    {
      selector: 'LabeledStatement',
      message: 'Labels are a form of GOTO; using them makes code hard to maintain and understand.'
    },
    {
      selector: 'WithStatement',
      message: '`with` is disallowed in strict mode because it makes code impossible to predict.'
    }
  ],
  'import/no-cycle': 'off',
  'import/prefer-default-export': 'off',
  'react/prop-types': 'off',
  'react/no-did-update-set-state': 'off',
  'react/destructuring-assignment': 'off',
  'react/prefer-stateless-function': 'off',
  'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }]
};

const tsEslintOverrides = {
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/no-object-literal-type-assertion': 'off',
  '@typescript-eslint/interface-name-prefix': ['error', 'always']
};

const jsExtensions = ['.js', '.jsx'];
const tsExtensions = ['.ts', '.tsx', '.d.ts'];
const assetsExtensions = ['jpg', 'jpeg', 'png', 'svg', 'css', 'scss', 'json'];

module.exports = {
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  plugins: ['react-hooks'],
  rules: {
    ...airbnbOverrides,
    ...tsEslintOverrides,
    'prettier/prettier': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error'
  },
  settings: {
    react: { version: 'detect' },
    'import/resolver': { typescript: {} },
    'import/extensions': jsExtensions.concat(tsExtensions),
    'import/parsers': { '@typescript-eslint/parser': tsExtensions },
    'import/ignore': ['node_modules', `\\.(${assetsExtensions.join('|')})$`]
  }
};
