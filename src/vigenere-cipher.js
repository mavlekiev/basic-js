const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  processString(message, key, encrypt) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = "";
    let index = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];

      if (char >= 'A' && char <= 'Z') {
        const description = encrypt ? 1 : -1;
        const charCode = ((char.charCodeAt() - 65 + description * (key[index % key.length].charCodeAt() - 65) + 26) % 26) +  65;
        result += String.fromCharCode(charCode);
        index++;
      } else {
        result += char;
      }
    }
    return this.direct ? result : result.split('').reverse().join('');
  }

  encrypt(message, key) {
    return this.processString(message, key, true);
  }

  decrypt(message, key) {
    return this.processString(message, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine
};
