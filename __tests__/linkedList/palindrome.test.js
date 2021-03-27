'use strict';

const linkedList = require('../../Data-Structures/linkedList/linked-list.js');
const isPalindrome = require('../../Data-Structures/linkedList/palindrome.js');

describe("PALINDROME test method", () => {

  let testList = new linkedList();
  let palindromeList = new linkedList();

  beforeEach(() => {
    for (let i=0; i<5; i++) {
      testList.append(i);
    }
    //should have 1->2 3 4 5
    let palindrome = ['r', 'a', 'c', 'e', 'c', 'a', 'r'];
    for (let i=0; i<palindrome.length; i++) {
      palindromeList.append(palindrome[i]);
    }
    //should be r a c e c a r
  })

  afterEach(() => {
    testList.head = null;
    palindromeList.head = null;
  })

  test('that palindrome returns false if not a palindrome', () => {
    expect(isPalindrome(testList)).toBe(false);
    expect(isPalindrome(palindromeList)).toBe(true);
  })

})
