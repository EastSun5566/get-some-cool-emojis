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

/**
 * Max emojis per call, avoids `Invalid array length` and out-of-memory
 */
const MAX_COUNT = 1e6;

/**
 * @param {unknown} param
 */
const parse2Int = (param) => {
  const int = Math.floor(Number(param === true ? 0 : param));
  // NaN and Infinity are invalid input, same as other non-numbers
  return Number.isFinite(int) ? int : 0;
};

/**
 * Get Random emojis
 *
 * @param {number} [number=0] - The number of emojis (capped at 1,000,000)
 * @returns {string} The string of Emojis list
 */
module.exports = (number = 0) => {
  const max = Math.min(parse2Int(number), MAX_COUNT);
  if (max <= 0) return '';

  const emojiCount = EMOJIS.length;
  const result = new Array(max);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < max; i++) {
    result[i] = EMOJIS[Math.floor(Math.random() * emojiCount)];
  }

  return result.join('');
};
