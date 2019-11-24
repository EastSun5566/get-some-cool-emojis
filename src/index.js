/**
 * @package get-some-cool-emojis
 *
 * @license MIT
 * @copyright (c) 2018 - present
 * @author 汪東陽 EastSun5566
 */

/**
 * Emojis List
 * @type {string[]}
 */
const emojisList = require('emojis-list');

/**
 * Get Random Integer
 * @returns {number} The Random integer
 */
const getRandomInteger = () => Math.floor(Math.random() * (emojisList.length - 1));

/**
 * @param {number} [number=0] - The number of emojis
 * @returns {string} The string of Emojis list
 */
module.exports = (number = 0) => Array
  .from(
    { length: Math.floor(Number(number === true ? 0 : number)) || 0 },
    () => emojisList[getRandomInteger()],
  )
  .join('');
