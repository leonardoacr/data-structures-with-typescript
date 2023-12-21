# Simple Linked List

A Linked List (LL) is a list defined by nodes. Each node contains an "element" which can be a number, string, array, or object. The node also contains a "next" pointer, which stores the reference to the next node in the list. If there is no next node, the "next" pointer will be undefined or null, indicating the end of the list.

The contract of the Linked List class can be defined as:

```tsx
export interface LinkedListMethods<T> {
  push(element: T): void;
  insert(element: T, position: number): void;
  getElementAt(position: number): Node<T> | undefined;
  removeAt(position: number): T | undefined;
  remove(element: T): void;
  indexOf(element: T): number;
  size(): number;
  toString(): string;
}
```

The first element of a LL is known as the “head”, and the next ones, as “nodes”. The structure can be illustrated as:

```
Head -> [ Data1 | Next ] -> [ Data2 | Next ] -> [ Data3 | null ]
```

One of the advantages of a LL over a array structure is that if we insert a new element to the second node, it won't need to spend memory and processing to shift all the other elements in the list, we simple take the node on the position we want to insert the new node and pass it to the "next" node. The final structure will be:

```
Head -> [ Data1 | Next ] -> [ Data4 | Next ] -> [ Data2 | Next ] -> [ Data3 | null ]
```

## Conclusion

In conclusion, linked lists offer a dynamic and efficient way to organize and manage data. The structure of a linked list, with a "head" pointing to subsequent "nodes," allows for easy insertion and removal of elements without the need to shift the entire list. This makes linked lists advantageous over traditional array structures in scenarios where frequent modifications to the data are expected.

However, it's important to note that linked lists come with their trade-offs. While they excel in insertions and deletions, they may not provide constant-time access to arbitrary elements, and their memory usage can be less efficient due to the additional storage required for the "next" pointers.

Choosing between an array and a linked list depends on the specific requirements of the application. Linked lists are particularly useful when flexibility and efficient insertions/deletions are essential, whereas arrays may be preferred for direct access to elements and more predictable memory usage.
