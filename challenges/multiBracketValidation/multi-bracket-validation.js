'use strict';

let stack = require('../../Data-Structures/stacks-and-queues/stack.js');

/**
 * Multi bracket validation, accepts a string as input and returns a boolean
 * representing if the brackets in the string are properly balanced/nested
 * @param {string} input - accepts a string input
 * @return {boolean} - representing if the brackets are balanced or not
 */

module.exports = (input) => {

  // Step one eliminate extra characters
  let regex = /[\{\}\[\]\(\)]/;
  let bracketArr = [];

  for (let i=0; i<input.length; i++) {
    if(input.charAt(i).match(regex)) {
      bracketArr.push(input.charAt(i));
    }
  }

  // if the number is odd or there are none, we can eliminate now
  if(bracketArr.length % 2 > 0 || bracketArr.length === 0) {
    return false;
  }

  let openStack = new stack();

  let open = /[\{\[\(]/;

  // if opening bracket, push onto the stack
  // if a closing bracket it must match the top of the stack

  for (let i=0; i<bracketArr.length-1; i++) {
    if (bracketArr[i].match(open)) {
      openStack.push(bracketArr[i]);
    } else {
      // if there is nothing on the stack, it means a bracket closed
      // before it opened, so we'll return false
      if (openStack.top === null) {
        return false;
      }
      let open = openStack.pop();
      let close = bracketArr[i];
      switch(open) {
        case '{':
          if (close === ')' || close === ']') { return false };
          break;
        case '(':
          if (close === '}' || close === ']') { return false };
          break;
        case '[':
          if (close === ')' || close === '}') { return false };
          break;
      }
    }
  }

  return true;
}
