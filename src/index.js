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
 * @param {unknown} param
 */
const parse2Int = (param) => Math.floor(Number(param === true ? 0 : param)) || 0;

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
    result[i] = EMOJIS[Math.floor(Math.random() * emojiCount)];
  }

  return result.join('');
};
