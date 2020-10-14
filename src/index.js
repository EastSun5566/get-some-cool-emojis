/* eslint-disable no-plusplus */
/**
 * @package get-some-cool-emojis
 *
 * @license MIT
 * @copyright (c) 2018 - present
 * @author 汪東陽 EastSun5566
 */

const { parse2Int, getEmoji } = require('./utils');

/**
 * Get Random emojis
 *
 * @param {number} [number=0] - The number of emojis
 * @returns {string} The string of Emojis list
 */
module.exports = (number = 0) => {
  let emojis = '';

  for (let i = 0; i < parse2Int(number); i++) {
    emojis += getEmoji();
  }

  return emojis;
};
