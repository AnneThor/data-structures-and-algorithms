'strict'

class Node {

  /**
  * Creates a node object that holds a value, and two references (prev/next)
  * @param {*} value - accepts any input value type and saves in this field
  */
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }

}

module.exports = Node;
