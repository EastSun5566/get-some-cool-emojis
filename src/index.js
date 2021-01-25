// @ts-check
/**
 * @package get-some-cool-emojis
 *
 * @license MIT
 * @copyright (c) 2018 - present
 * @author 汪東陽 EastSun5566
 */

/**
 * Raw emoji List
 *
 * @description use `npm run gen:emojis` to generate latest emojis
 * @type {string[]}
 */
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
const EMOJIS = require('./__EMOJIS__');
const { parse2Int, getRandomInt } = require('./utils');

/**
 * Get Random emojis
 *
 * @param {number} [number=0] - The number of emojis
 * @returns {string} The string of Emojis list
 */
module.exports = (number = 0) => {
  const max = parse2Int(number);

  let emojis = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < max; i++) {
    emojis += EMOJIS[getRandomInt(0, EMOJIS.length - 1)];
  }

  return emojis;
};
