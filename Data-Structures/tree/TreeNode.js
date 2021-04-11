/**
 * The Tree Node class consists of nodes that contain a value and a left and right reference; all values are instantiated to null
 */

class TreeNode {

  /**
   * The constructor method creates a new TreeNode containing the input value and null left/right references
   * @param {*} value - the value to contain in the new TreeNode
   */
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

}

module.exports = TreeNode;
