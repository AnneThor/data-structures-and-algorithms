# Repeated Words

## Challenge
Write a function that returns the first word found twice in a string. I also included a function that will catalog and return an object of all unique words and the number of occurrences in the string.

## Approach & Efficiency
`repeatedWords` is a function that uses a hash table to add words as they occur in the sentence. Each word is first checked to see if it is already in the table, the first time the `contains` function of the hashtable returns true, the corresponding value is returned.

This will operate at O(n) time because the first word to repeat may be the last word in the string. Each word must be checked O(1) and then added to the map. So we are using O(n) time and space complexity.

`wordCount` takes a string and also uses a hash table (and the `update` method I added to the hash table) and will add words to the table on their first occurence. If they are already in the table, the function will update their entry by incrementing their count. The function ultimately returns an object containing key: value pairs that represent unique words: their count in the text.

This is also operating a O(n) because the function must add or update the map n times. Space is the space of the hashtable, which is storing maximum N entries.

## Solution
[JS Docs for Repeated Words/Word Count](https://annethor.github.io/data-structures-and-algorithms/out/repeatedWords.js.html)

[JS Docs for Hash Table](https://annethor.github.io/data-structures-and-algorithms/out/hashTable.js.html)
