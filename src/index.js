/**
 * @package get-some-cool-emojis
 *
 * @license MIT
 * @copyright (c) 2018 - present
 * @author 汪東陽 EastSun5566
 */

const EMOJIS_UNICODE_RANGES = [
  ['0x0080', '0x02AF'],
  ['0x0300', '0x03FF'],
  ['0x0600', '0x06FF'],
  ['0x0C00', '0x0C7F'],
  ['0x1DC0', '0x1DFF'],
  ['0x1E00', '0x1EFF'],
  ['0x2000', '0x209F'],
  ['0x20D0', '0x214F'],
  ['0x2190', '0x23FF'],
  ['0x2460', '0x25FF'],
  ['0x2600', '0x27EF'],
  ['0x2900', '0x29FF'],
  ['0x2B00', '0x2BFF'],
  ['0x2C60', '0x2C7F'],
  ['0x2E00', '0x2E7F'],
  ['0x3000', '0x303F'],
  ['0xA490', '0xA4CF'],
  ['0xE000', '0xF8FF'],
  ['0xFE00', '0xFE0F'],
  ['0xFE30', '0xFE4F'],
  ['0x1F000', '0x1F02F'],
  ['0x1F0A0', '0x1F0FF'],
  ['0x1F100', '0x1F64F'],
  ['0x1F680', '0x1F6FF'],
  ['0x1F910', '0x1F96B'],
  ['0x1F980', '0x1F9E0'],
];

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomHex = (min, max) => (
  Math.floor(Math.random() * (max - min + 1)) + parseInt(min, 16)
);

const parseUnicode2Emojis = (unicode) => String.fromCodePoint(unicode);

const getEmoji = () => {
  const [start, end] = EMOJIS_UNICODE_RANGES[getRandomInt(0, EMOJIS_UNICODE_RANGES.length - 1)];

  return parseUnicode2Emojis(getRandomHex(start, end));
};

const parse2Int = (param) => Math.floor(Number(param === true ? 0 : param)) || 0;

/**
 * Get Random emojis
 *
 * @param {number} [number=0] - The number of emojis
 * @returns {string} The string of Emojis list
 */
module.exports = (number = 0) => Array
  .from(
    { length: parse2Int(number) },
    () => getEmoji(),
  )
  .join('');
