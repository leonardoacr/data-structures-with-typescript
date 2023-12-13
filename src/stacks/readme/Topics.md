Stack is a data collection that orders items in a Last In First Out (LIFO) structure, meaning that the first element to be removed is the last one that was added.

To illustrate this concept, imagine a pile of books inside a bucket. You can only remove the top book when all the other books have been taken out.

Now, let's create an array to build a stack:

```tsx
class Stack implements StackMethods {
  items: number[];

  constructor() {
    this.items = [];
  }
}
```

This class will have six methods to represent the stack:

```tsx
interface StackMethods {
  push(element: number): void;
  pop(): number | undefined;
  peek(): number;
  isEmpty(): boolean;
  size(): number;
  clear(): void;
}
```

**Push method -** This method will add new elements to the top of the stack.

```tsx
push(element: number) {
	this.items.push(element);
}
```
