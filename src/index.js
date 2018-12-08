import emojisList from 'emojis-list';

export default (num) => {
  const emojiNumber = parseInt(num);
  let emojiString = '';

  for (let i = 0; i < emojiNumber; i++) {
    const randomNumber = Math.floor(Math.random() * (emojisList.length - 1));
    emojiString += emojisList[randomNumber];
  }

  return emojiString;
};
