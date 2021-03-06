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
/**
 * @type {string}
 */
// eslint-disable-next-line import/no-dynamic-require
const emojis = require(`${emojisDataPkg}/Sequence_Property/RGI_Emoji`);

const targetFile = resolve(__dirname, '..', 'src', '__EMOJIS__.js');

Readable
  .from(`module.exports = ${JSON.stringify(emojis)}`)
  .pipe(createWriteStream(targetFile))
  .on('error', console.error)
  .on('finish', () => console.log(`✨ Successfully generate ${targetFile}`));
