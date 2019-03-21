const emojisList = require('emojis-list');

const getRandomInt = () => Math.floor(Math.random() * (emojisList.length - 1));

module.exports = (num = 0) => {
  const emojiNumber = Math.floor(Number(num === true ? 0 : num)) || 0;

  const emojiString = Array
    .from(
      { length: emojiNumber },
      () => emojisList[getRandomInt()],
    )
    .join('');

  return emojiString;
};
