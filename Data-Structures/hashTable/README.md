# Hashtables

## Challenge
Short implementation of hash table with `hash`, `add`, `get` and `contains` properties.

## Approach & Efficiency
Hash tables have O(1) for lookup if they are well sizes and have no collisions. If they do have collisions (which mine may as it does not have a refactoring capability to balance load), it will be a worst case scenario of O(n) if the hash table puts every item in the same bucket.

This implementation initializes the HashTable with an empty linked list at each bucket.

The Hash algorithm I used it pretty basic, with some randomness, so I would not expect the values to all end up in one bucket, so the average lookup time would be somewhere between O(1) and O(n) where n is the number of elements in the table.

## API
[Link to JSDoc for Hash Table](https://annethor.github.io/data-structures-and-algorithms/out/hashTable.js.html)
