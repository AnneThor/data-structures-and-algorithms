'use strict';
const ll = require('../../Data-Structures/linkedList/linked-list.js')
const ht = require('../../Data-Structures/hashTable/hashTable.js')

describe("HASH TABLE functionality", () => {

  let synonym, antonym, empty;
  let expectedOutput = [
    ["fond", "enamored", "averse"],
    ["wrath", "anger", NULL],
    ["deligent", "employed", "idle"],
    ["outfit", "garb", NULL],
    ["guide", "usher", "follow"]
  ]

  let expectedWithNull = [
    ["fond", "enamored", NULL],
    ["wrath", "anger", NULL],
    ["deligent", "employed", NULL],
    ["outfit", "garb", NULL],
    ["guide", "usher", NULL]
  ]

  let reverseResult = [
    ["fond", "averse", "enamored"],
    ["deligent", "idle", "employed"],
    ["guide", "follow", "usher"],
    ["flow", "jam", NULL]
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
    antonyn.add("flow", "jam")

    empty = new ht(9)
  })

  afterEach(() => {
    synonym = null;
    antonym = null;
  })

  test("that a left join returns the expected result", () => {
    expect(synonym.leftJoin(antonym).toEqual(expectedOutput);
    expect(antonym.leftJoin(synonym)).toEqual(reverseResult);
    expect(synonym.leftJoin(empty)).toEqual(expectedWithNull);
  })


})
