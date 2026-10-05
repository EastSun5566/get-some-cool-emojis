/* eslint-disable no-console */
const { Readable } = require('stream');
const { createWriteStream } = require('fs');
const { resolve } = require('path');

const { devDependencies } = require('../package.json');

/**
 * @see {@link https://github.com/node-unicode/node-unicode-data}
 */
const emojisDataPkg = Object
  .keys(devDependencies)
  .find((name) => name.startsWith('@unicode/unicode-'));
const dataPath = `${emojisDataPkg}/Sequence_Property/RGI_Emoji`;

/**
 * Newer `@unicode/unicode-*` releases (e.g. 18.0.0) are ESM-only (`index.mjs`),
 * while older ones (e.g. 17.0.0@1.x) are CommonJS. Support both.
 *
 * @returns {Promise<string[]>}
 */
const loadEmojis = async () => {
  try {
    // ESM can't import a bare directory, so point at the entry file.
    const { default: emojis } = await import(`${dataPath}/index.mjs`);
    return emojis;
  } catch (err) {
    if (err.code !== 'ERR_MODULE_NOT_FOUND') throw err;
    // eslint-disable-next-line import/no-dynamic-require, global-require
    return require(dataPath);
  }
};

const targetFile = resolve(__dirname, '..', 'src', '__EMOJIS__.js');

loadEmojis()
  .then((emojis) => new Promise((resolvePromise, reject) => {
    Readable
      .from(`module.exports = ${JSON.stringify(emojis)}`)
      .pipe(createWriteStream(targetFile))
      .on('error', reject)
      .on('finish', () => {
        console.log(`✨ Successfully generate ${targetFile}`);
        resolvePromise();
      });
  }))
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  });
