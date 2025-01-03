const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator === undefined ? '+' : options.separator;
  let addition = options.addition === undefined ? '' : options.addition;
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator === undefined ? '|' : options.additionSeparator;
  
  typeof str !== 'string' ? str = String(str) : str;
  typeof addition !== 'string' ? addition = String(addition) : addition;
  
  let result = '';
  let subResult = '';

  for (let i = 0; i < additionRepeatTimes; i++) {
    subResult += addition;
    if (i < additionRepeatTimes - 1) subResult += additionSeparator;
  } 

  for (let i = 0; i < repeatTimes; i++) {
    result += str + subResult;
    if (i < repeatTimes - 1) result += separator;
  }
  return result;
}

module.exports = {
  repeater
};
