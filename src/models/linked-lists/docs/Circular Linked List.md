# Circular List

A Circular Linked List is a variation of the traditional linked list where the last node points back to the first node, forming a closed loop. This circular structure provides continuous traversal, allowing seamless iteration from the last node back to the first.

The contract of the Circular Linked List class can be defined similarly to the Simple Linked List, with a few adjustments to handle the circular nature. The expected node will be replaced with the Circular Node interface:

```tsx
export interface CircularLinkedListMethods<T> {
  push(element: T): void;
  insert(element: T, position: number): void;
  getElementAt(position: number): CircularNode<T> | undefined;
  removeAt(position: number): T | undefined;
  remove(element: T): void;
  indexOf(element: T): number;
  size(): number;
  toString(): string;
}
```

Where the Circular Node is defined as:

```tsx
export class CircularNode<T> {
  element: T;
  next: CircularNode<T> | undefined;

  constructor(element: T, next?: CircularNode<T>) {
    this.element = element;
    this.next = next;
  }
}
```

The structure of a Circular Linked List can be illustrated as follows:

```markdown
Head -> [ Data1 | Next ] -> [ Data2 | Next ] -> ... -> [ DataN | Next | Head ]
```

## Conclusion

Circular Linked Lists extend the functionality of traditional linked lists by creating a closed loop, allowing continuous traversal from the last node back to the first. This circular structure is particularly useful in scenarios where cyclic data representation is needed.

Similar to singly linked lists, circular linked lists offer dynamic and efficient data management, especially for scenarios involving frequent insertions and deletions. They provide constant-time access to any node in the list, making them suitable for various applications.

When choosing between a singly linked list and a circular linked list, consider the specific requirements of your application. Circular linked lists are beneficial when continuous traversal or cyclic data representation is essential. They can be advantageous in scenarios such as round-robin scheduling or representing cyclic processes.
