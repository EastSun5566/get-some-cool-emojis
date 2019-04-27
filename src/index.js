const emojisList = require('emojis-list');

/**
 * @return {number} Random integer
 */
const getRandomInteger = () => Math.floor(Math.random() * (emojisList.length - 1));

/**
 * @module get-some-cool-emojims
 *
 * @param {number} number - Number of emojis
 * @returns {string} String of Emojis list
 */
module.exports = (number = 0) => Array
  .from(
    { length: Math.floor(Number(number === true ? 0 : number)) || 0 },
    () => emojisList[getRandomInteger()],
  )
  .join('');
