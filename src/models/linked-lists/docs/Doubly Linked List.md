# Doubly Linked List

A Doubly Linked List (DLL) is an extension of the traditional linked list, where each node contains an "element" and two pointers - "next" pointing to the next node and "prev" pointing to the previous node in the list. This bidirectional linkage allows traversal in both forward and backward directions.

The contract of the Doubly Linked List class can be defined as an extension of the Simple Linked List, where only the expected node will be replaced to the Doubly Node interface:

```tsx
export interface DoublyLinkedListMethods<T> {
  push(element: T): void;
  insert(element: T, position: number): void;
  getElementAt(position: number): DoublyNode<T> | undefined;
  removeAt(position: number): T | undefined;
  remove(element: T): void;
  indexOf(element: T): number;
  size(): number;
  toString(): string;
}
```

Where the Doubly Node is defined as:

```tsx
export class DoublyNode<T> {
  element: T;
  prev: DoublyNode<T> | undefined;
  next: DoublyNode<T> | undefined;

  constructor(element: T, prev?: DoublyNode<T>, next?: DoublyNode<T>) {
    this.element = element;
    this.prev = prev || undefined;
    this.next = next || undefined;
  }
}
```

The structure of a Doubly Linked List can be illustrated as follows:

```
Head <-> [ Data1 | Next | Prev ] <-> [ Data2 | Next | Prev ] <-> ... <-> [ DataN | Next | Prev | null ]
```

## Conclusion

Doubly Linked Lists enhance the functionality of traditional linked lists by providing bidirectional traversal capabilities. The addition of a "prev" pointer enables efficient backward traversal, which can be useful in various scenarios.

Similar to singly linked lists, doubly linked lists offer dynamic and efficient data management, especially for scenarios involving frequent insertions and deletions. However, they may incur slightly higher memory overhead due to the storage of both "next" and "prev" pointers.

When choosing between a singly linked list and a doubly linked list, consider the specific requirements of your application. Doubly linked lists are beneficial when bidirectional traversal is essential, and the flexibility of efficient insertions and deletions is desired.
