# Singly Linked List
Implementation of a doubly linked list. A linked list object will instantiate a new linked list with an empty (null) head. Nodes can be instantiated and added to the linkedlist object using the available object methods, currently ```insert```: add to head, ```append```: add to tail, ```includes``` returns boolean representing if input value is present in linked list, ```toString```: returns string representation of linked List

## Challenge
Created DoublyLinkedList and Node classes, add functionality as outlined above to the LinkedList class

## Approach & Efficiency

### Linked List Object Methods
| Method | Description | Time Complexity | Space Complexity
------ | ----------- | --------------- | ----------------
| ```insert``` | adds a node to the head of the linked list | O(1) | O(1)
| ```append``` | adds a node to the tail (end) of linked list) |  O(1) | O(1)
| ```includes``` | returns boolean representing if param value is found in linked list | O(n) | O(1) ? I think, it's not creating anything new, just returning a boolean
| ```toString``` | returns string representation of linked list | O(n) | O(1)

Improved functionality on the append method because doubly linked list has a tail marker in my implementation that can be used to add to the end in the same method as adding to the front of a singly linked list (no traversing necessary add to end)

## API
[JS Docs](https://annethor.github.io/data-structures-and-algorithms/out/doubly-linked-list.js.html)
