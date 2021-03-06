'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }


  /**
  * Takes in any value as an argument and adds a new node as the head
  * @param {*} value - accepts any value to store in the node
  */
  insert(value) {
    let current = this.head;
    this.head = new Node(value);
    this.head.next = current;
  }

  /**
  * Takes in any values as an argument and adds a new node as the tail
  * @param {*} value - any value is acceptable as input
  */
  append(value) {
    if (!this.head) {
      this.head = new Node(value);
    } else {
      let current = this.head;
      //traverse to the last node
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    }
  }

  /**
  * Takes in any value and returns a Boolean representing if the linked list
  * includes the value
  * @param {*} value - takes in any type of value to search for
  * @returns {Boolean} - representing if the value was found in the linked list
  */
  includes(value) {
    if (this.head === null) {
      return false;
    }
    let current = this.head;
    while (current.next) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  /**
  * Returns all the values in the linked list as a string represented in the format
  * "{ a } -> { b } -> { c } -> NULL"
  * @returns {String} - string representing the data held in each node in the format
  * "{ a } -> { b } -> { c } -> NULL"
  */
  toString() {
    if (!this.head) {
      return "NULL";
    }
    let current = this.head;
    let returnString ='';
    while (current.next) {
      let curStr = typeof current.value === "string" ? current.value: current.value.toString();
      returnString += `\{ ${curStr} \} \-\> `
      current = current.next;
    }
    let curStr =  typeof current.value === "string" ? current.value: current.value.toString();
    return returnString + `\{ ${curStr} \} \-\> NULL`;
  }

}

module.exports = LinkedList;
