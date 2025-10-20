/** @type {import('eslint').Linter.RulesRecord} *// eslint-disable-next-line */
const config = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint-config-next'
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'react/prop-types': 'off',
  },
  ignorePatterns: [
    'node_modules',
    '.next',
    'out'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  }
}

module.exports = config
