const { EMOJIS_UNICODE_RANGES } = require('./constants');

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomHex = (min, max) => Math.floor(Math.random() * (max - min + 1)) + parseInt(min, 16);

const parseUnicode2Emojis = (unicode) => String.fromCodePoint(unicode);

const getEmoji = () => {
  const [start, end] = EMOJIS_UNICODE_RANGES[getRandomInt(0, EMOJIS_UNICODE_RANGES.length - 1)];

  return parseUnicode2Emojis(getRandomHex(start, end));
};

const parse2Int = (param) => Math.floor(Number(param === true ? 0 : param)) || 0;

module.exports.getEmoji = getEmoji;
module.exports.parse2Int = parse2Int;
