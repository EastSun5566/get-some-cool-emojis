const emojisList = require('emojis-list');

module.exports = (num = 0) => {
  const emojiNumber = Math.floor(Number(num)) || 0;
  let emojiString = '';

  for (let i = 0; i < emojiNumber; i++) {
    const randomNumber = Math.floor(Math.random() * (emojisList.length - 1));
    emojiString += emojisList[randomNumber];
  }

  return emojiString;
};
