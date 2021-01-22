/**
 * @param {number} min
 * @param {number} max
 */
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * @param {unknown} param
 */
const parse2Int = (param) => Math.floor(Number(param === true ? 0 : param)) || 0;

module.exports.parse2Int = parse2Int;
module.exports.getRandomInt = getRandomInt;
