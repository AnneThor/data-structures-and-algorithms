# Singly Linked List
External functions accepting linked lists as inputs have been added:

```zip(llOne, llTwo)```
```zipSort(llOne, llTwo)```

## Challenge
**Zip** combines two linked lists, alternating one node from the beginning of each
**ZipSort** combines two sorted linked lists (input lists must be of numbers pre sorted in ascending value) and returns one sorted linked list combining them

## Approach & Efficiency
**Zip** integrates the second list into the first, it deletes along the way so it does not require additional space (due to the nature of LL not requiring contiguous memory); the operations will run 2x for each node (1 to add, 1 to delete) so O(2n)
**ZipSort** integrates the lists into a new linkedList, deleting from input lists along the way therefore not requiring additional memory for the same reason stated above. Same complexities aply here.

### External Methods Using Linked Lists

| Method | Description | Time Complexity | Space Complexity
------ | ----------- | --------------- | ----------------
| ```zip(llOne, llTwo)``` | takes two linked lists as inputs and returns one linked list that is ordered by alternating nodes from each input list; works on any length of input lists, they do not have to be equal in length | O(2n) | O(1)
| ```zipSort(llOne, llTwo) | takes in two sorted linked lists (of numbers in ascending values), that are returned as one sorted list; works on any length input lists, they do not have to be equal in length | O(2n) | O(1)

## API / Whiteboard
[JS Docs Zip](https://annethor.github.io/data-structures-and-algorithms/out/zip.js.html)

[JS Docs Zip-Sort](https://annethor.github.io/data-structures-and-algorithms/out/zip-sort.js.html)

![image of linked list whiteboard](../../assets/linked-list-zip.png)
