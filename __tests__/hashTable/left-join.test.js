'use strict';
const ll = require('../../Data-Structures/linkedList/linked-list.js')
const ht = require('../../Data-Structures/hashTable/hashTable.js')
const { leftJoin } = require('../../challenges/leftJoin/leftJoin.js')

describe("HASH TABLE functionality", () => {

  console.log("LEFT JOIN", leftJoin);

  let synonym, antonym, empty;
  let expectedOutput = [
    ["fond", "enamored", "averse"],
    ["wrath", "anger", null],
    ["diligent", "employed", "idle"],
    ["outfit", "garb", null],
    ["guide", "usher", "follow"]
  ]

  let expectedWithnull = [
    ["fond", "enamored", null],
    ["wrath", "anger", null],
    ["diligent", "employed", null],
    ["outfit", "garb", null],
    ["guide", "usher", null]
  ]

  let reverseResult = [
    ["fond", "averse", "enamored"],
    ["diligent", "idle", "employed"],
    ["guide", "follow", "usher"],
    ["flow", "jam", null]
  ]

  beforeEach(() => {
    synonym = new ht(5);
    synonym.add("fond", "enamored")
    synonym.add("wrath", "anger")
    synonym.add("diligent", "employed")
    synonym.add("outfit", "garb")
    synonym.add("guide", "usher")

    antonym = new ht(6);
    antonym.add("fond", "averse")
    antonym.add("diligent", "idle")
    antonym.add("guide", "follow")
    antonym.add("flow", "jam")

    empty = new ht(9)
  })

  afterEach(() => {
    synonym = null;
    antonym = null;
  })

  test("that a left join returns the expected result", () => {
    expect(leftJoin(synonym, antonym)).toEqual(expectedOutput);
    expect(leftJoin(antonym, synonym)).toEqual(reverseResult);
    expect(leftJoin(synonym, empty)).toEqual(expectedWithnull);
  })


})
