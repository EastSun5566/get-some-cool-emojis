module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
  },
  overrides: [
    {
      // dynamic `import()` is used to load ESM-only Unicode data packages
      files: ['scripts/**/*.js'],
      parserOptions: {
        ecmaVersion: 2020,
      },
    },
  ],
};
