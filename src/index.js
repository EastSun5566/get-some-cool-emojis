/**
 * @license MIT
 * @copyright (c) 2018 - present
 * @author 汪東陽 EastSun5566
 */

const emojisList = require('emojis-list');

/**
 * @returns {number} The Random integer
 */
const getRandomInteger = () => Math.floor(Math.random() * (emojisList.length - 1));

/**
 * @package get-some-cool-emojis
 *
 * @param {number} number - The number of emojis
 * @returns {string} The string of Emojis list
 */
module.exports = (number = 0) => Array
  .from(
    { length: Math.floor(Number(number === true ? 0 : number)) || 0 },
    () => emojisList[getRandomInteger()],
  )
  .join('');
