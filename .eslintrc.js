module.exports = {
  extends: 'vvdev/react-native',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.tsx', '.ts'],
      },
    },
  },
  rules: {
    'guard-for-in': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'react/sort-comp': 'off',
    'react-native/no-color-literals': 'off',
    'react-native/no-raw-text': 'off',
    'no-unused-expressions': 'off',
    'linebreak-style': 0,
    'no-shadow': ['error', { builtinGlobals: false, hoist: 'functions', allow: ['state', 'frame'] }],
    'no-use-before-define': ['error', { functions: false, classes: false, variables: false }],
    'react-hooks/exhaustive-deps': 'off',
  },
};
