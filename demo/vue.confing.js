const { name } = require('../package.json');

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? `/${name}/`
    : '/',
};
