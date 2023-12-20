# Queue

Queues are similar structures to stacks, but instead of following the LIFO (Last In First Out) principle, they operate on the FIFO (First In First Out) principle, also known as first-come/first-served. In a queue, new elements are added to the tail and elements are removed from the front.

Creating the Queue class:

```tsx
class Queue implements QueueMethods {
  private count: number;
  private lowestCount: number;
  private items: QueueItems;

  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
}
```

Where the QueueMethods are given by:

```tsx
export interface QueueMethods {
  enqueue(element: number): void;
  dequeue(): QueueItem;
  peek(): QueueItem;
  isEmpty(): boolean;
  size(): number;
  clear(): void;
}
```

And the Items can be:

```tsx
export type QueueItem = number | string | undefined;

export interface QueueItems {
  [key: number]: QueueItem;
}
```

Example:

```tsx
queue = {
  0: 'First element'
};
```

Enqueue new element:

```tsx
queue = {
  0: 'First element',
  1: 'Second element'
};
```

Dequeue element:

```tsx
queue = {
  1: 'Second element'
};
```
