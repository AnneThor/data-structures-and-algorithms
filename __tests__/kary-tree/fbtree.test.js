const Node = require ('../../Data-Structures/tree/TreeNode.js');
const BinaryTree = require('../../Data-Structures/tree/BinaryTree.js');
const { FizzBuzzTree, FizzBuzzTreeHelper } = require('../../challenges/fizzBuzzTree/fizz-buzz-tree.js');

describe("FIZZ BUZZ K ARY TREE functionality", () => {

  let emptyTree = new BinaryTree();
  let smallTree = new BinaryTree();
  smallTree.root = new Node(15);
  smallTree.root.children = [new Node(3), new Node(7)];

  // design of small tree
  //         15
  //    3         7

  let fullTree = new BinaryTree();
  let childA = [new Node(3), new Node(7), new Node(10)];
  let childB = [new Node(4), new Node(12), new Node(6), new Node(5)];
  let childC = [new Node(5), new Node(4)]
  fullTree.root = new Node(15)
  fullTree.root.children = childC;
  childC[0].children = childA;
  childC[1].children = childB;

  // design of full tree
  //          15
  //     5          4
  // 3 7 10    4 12 6 5

  test("that if given an empty tree FizzBuzzTree returns null", () => {
    expect(FizzBuzzTree(emptyTree)).toEqual(null);
  })

  test("that FizzBuzzTree actually returns a separate tree", () => {
    let fbTree = FizzBuzzTree(smallTree);
    expect(fbTree instanceof BinaryTree).toBeTruthy();
    expect(fbTree.root).not.toEqual(smallTree.root);
    expect(fbTree).not.toEqual(smallTree);
  })

  test("that every value in the returned tree is a string", () => {
    // going to traverse the tree to touch every node and test that it is a string
    let fullFB = FizzBuzzTree(fullTree);
    const _helper = (node) => {
      if (!node) { return }
      expect(typeof node.value).toEqual("string");
      node.children.forEach(child => {
        _helper(child);
      })
    }
    _helper(fullFB.root);
  })

  test("that FizzBuzzTree properly converts all nodes", () => {
    // what we expect for the small tree
    // top layer/root: "FizzBuzz"
    // 2nd layer/root.children array: ["Fizz", "7"]
    let smallFB = FizzBuzzTree(smallTree);
    expect(smallFB.root.value).toEqual("FizzBuzz");
    expect(smallFB.root.children[0].value).toEqual("Fizz");
    expect(smallFB.root.children[1].value).toEqual("7");

    // what we expect per layer of full tree
    // top layer/root value: "FizzBuzz"
    // 2nd layer/children array: "Buzz", "4"
    // 3rd layer/children arrays: ["Fizz", "7", "Buzz"] and ["4", "Fizz", "Fizz", "Buzz"]
    let fullFB = FizzBuzzTree(fullTree);
    expect(fullFB.root.value).toEqual("FizzBuzz");
    expect(fullFB.root.children[0].value).toEqual("Buzz");
    expect(fullFB.root.children[1].value).toEqual("4");
    expect(fullFB.root.children[0].children[0].value).toEqual("Fizz")
    expect(fullFB.root.children[0].children[1].value).toEqual("7");
    expect(fullFB.root.children[0].children[2].value).toEqual("Buzz");
    expect(fullFB.root.children[1].children[0].value).toEqual("4");
    expect(fullFB.root.children[1].children[1].value).toEqual("Fizz");
    expect(fullFB.root.children[1].children[2].value).toEqual("Fizz");
    expect(fullFB.root.children[1].children[3].value).toEqual("Buzz");
  })



})
