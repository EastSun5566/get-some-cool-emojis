const { resolve } = require('path');
const { pathToFileURL } = require('url');
const { defineConfig } = require('@playwright/test');

// BASE_URL: a deployed site, otherwise the local `_site` (run `npm run build:demo` first)
const baseURL = process.env.BASE_URL
  ? process.env.BASE_URL.replace(/\/?$/, '/')
  : `${pathToFileURL(resolve(__dirname, '_site')).href}/`;

module.exports = defineConfig({
  testDir: 'e2e',
  testMatch: '**/*.e2e.js',
  use: { baseURL },
});
