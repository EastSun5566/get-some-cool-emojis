const { cpSync, writeFileSync } = require('fs');
const { resolve } = require('path');

const root = resolve(__dirname, '..');
const site = resolve(root, '_site');

// the demo runs the bundle built from this checkout, not the one published to npm
cpSync(resolve(root, 'demo'), site, { recursive: true });
cpSync(resolve(root, 'dist', 'index.js'), resolve(site, 'get-some-cool-emojis.js'));

// lets e2e check that a deployed site is this commit
writeFileSync(resolve(site, 'build-info.json'), JSON.stringify({ sha: process.env.GITHUB_SHA }));
