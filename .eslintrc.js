module.exports = {
  root: true,
  extends: 'vvdev/react-native',
  parser: '@typescript-eslint/parser',
  env: { jest: true },
  overrides: [
    {
      files: ['app/redux/**/index.ts'],
      rules: {
        'no-param-reassign': ['error', { props: false }],
        'react-hooks/exhaustive-deps': 'off',
      },
    },
  ],
};
