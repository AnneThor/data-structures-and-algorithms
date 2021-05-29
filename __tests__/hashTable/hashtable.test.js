'use strict';
const ll = require('../../Data-Structures/linkedList/linked-list.js')
const ht = require('../../Data-Structures/hashTable/hashTable.js')

describe("HASH TABLE functionality", () => {

  let newHT;

  beforeEach(() => {
    newHT = new ht(5);
  })

  afterEach(() => {
    newHT = null;
  })

  test("that we can CREATE an empty hashTable", () => {
    // should create a ll with 5 buckets
    expect(newHT.map.length).toEqual(5);
    newHT.map.forEach(bucket => {
      expect(typeof bucket).toBe('object');
    })
  })

  test("that the hash function generates a consistent result", () => {
    let hash1 = newHT.hash("Test");
    let hash2 = newHT.hash("Test");
    expect(hash1 === hash2).toBe(true);
    let hash3 = newHT.hash("Try a longer hash");
    let hash4 = newHT.hash("Try a longer hash");
    expect(hash3 === hash4).toBe(true);
  })

  test("that the key value pair is inserted at the expected index", () => {
    let [key, value] = ["Annie", "student"];
    let hash = newHT.hash("Annie");
    newHT.add(key, value);
    expect(newHT.map[hash].head).toBeDefined();
    expect(newHT.map[hash].head.value).toEqual({ "Annie": "student" })
    expect(newHT.get("Annie")).toEqual("student")
  })

  test("that you cannot add the same key twice", () => {
    let [key, value] = ["Annie", "student"];
    newHT.add(key, value);
    expect(newHT.add(key, value)).toEqual("Value already in table");
  })

  test("that you cannot retrieve a value that is not in the map", () => {
    expect(newHT.get("randomKey")).toEqual(null);
  })

  test("that we can handle collisions", () => {
    let shortHash = new ht(1);
    shortHash.add("Annie", "student");
    shortHash.add("White Worm", "Cat");
    expect(shortHash.get("White Worm")).toEqual("Cat")
  })

})
