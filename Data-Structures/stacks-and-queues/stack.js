'use strict';

const Node = require('../linkedList/node.js');

class Stack {

  /**
   * @constructor
   * instantiates a new instance of Stack class with an empty top node and a length of 0
   */
  constructor() {
    this.top = null;
  }

  /**
   * Accepts an input value, creates a new Node object holding this value and adds this
   * new node to the top of the stack
   * @param {*} value - the value to hold inside the new Node
   */
   push(value) {
     if (!this.top) {
       return this.top = new Node(value);
     }
     let newNode = new Node(value);
     newNode.next = this.top;
     this.top = newNode;
   }

   /**
    * Removes and returns the top node from a stack or throws an error if the stack is empty
    * @returns {*} - contents/value of the top node
    */
   pop() {
     if (!this.top) { throw new Error({ message: 'Stack is empty!' }); }
     let tempNode = this.top;
     this.top = this.top.next;
     tempNode.next = null;
     return tempNode.value;
   }

   /**
    * Returns the value held in the top node or throws an error for an empty stack
    */
    peek() {
      if (!this.top) { throw new Error({ message: 'Stack is empty!' }) };
      return this.top.value;
    }

    /**
     * Returns a boolean representing whether the stack is empty
     * @returns {boolean} representing if stack is empty
     */
     isEmpty() {
       return this.top ? true : false;
     }

}

module.exports = Stack;
