const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const maxElements = [];
  let str = String(n);
  for (let i = 0; i < str.length; i++) {
    maxElements.push(+(str.slice(0, i) + str.slice(i + 1)));
  }
  maxElements.sort((a, b) => b - a)
  return maxElements[0];
}

module.exports = {
  deleteDigit
};
