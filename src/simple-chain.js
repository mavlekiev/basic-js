const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  array: [],
  getLength() {
    return this.array.length;
  },
  addLink(value) {
    this.array.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position % 1 !== 0 || position < 1 || position > this.array.length) {
      this.array.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
    this.array.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.array = this.array.reverse();
    return this;

  },
  finishChain() {
    const result = this.array.map((item) => `( ${item} )`).join('~~');
    this.array.length = 0;
    return result;
  }
};

module.exports = {
  chainMaker
};
