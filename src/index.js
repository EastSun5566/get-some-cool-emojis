// @ts-check
/**
 * @package get-some-cool-emojis
 *
 * @license MIT
 * @copyright (c) 2018 - present
 * @author Michael Wang
 */

/**
 * Raw emoji List
 *
 * @description use `npm run gen:emojis` to generate latest emojis
 * @type {string[]}
 */
// @ts-ignore
// eslint-disable-next-line import/no-unresolved, import/extensions
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
  
  if (max <= 0) return '';

  const emojiCount = EMOJIS.length;
  const result = new Array(max);

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < max; i++) {
    result[i] = EMOJIS[getRandomInt(0, emojiCount - 1)];
  }

  return result.join('');
};
