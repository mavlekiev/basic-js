const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  const arr = [];

  if (!domains) return {};
  for (let i = 0; i < domains.length; i++) {
    let sum = '';
    arr.push(domains[i].split('.'));
    for (let j = arr.length; j >= 0; j--) {
      sum += `.${arr[i][j]}`;
      if (!result[sum]) {
        result[sum] = 0;
      }
      result[sum]++;
    } 
  }
  return result;
}

module.exports = {
  getDNSStats
};
