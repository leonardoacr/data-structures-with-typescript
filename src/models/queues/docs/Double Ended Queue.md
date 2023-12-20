# Double Ended Queue (Deque)

A Double Ended Queue, commonly known as a Deque, is an abstract data type that allows insertion and removal of elements from both the front and rear ends of the queue. It combines the features of a stack and a queue, providing versatile functionality.

```tsx
export interface DoubleEndedQueueMethods {
  enqueueFront(element: DoubleEndedQueueItem): void;
  enqueueRear(element: DoubleEndedQueueItem): void;
  dequeueFront(): DoubleEndedQueueItem;
  dequeueRear(): DoubleEndedQueueItem;
  peekFront(): DoubleEndedQueueItem;
  peekRear(): DoubleEndedQueueItem;
  isEmpty(): boolean;
  size(): number;
  clear(): void;
  toString(): string;
}

export type DoubleEndedQueueItem = number | string | undefined;
```

If we enqueue elements like this:

```tsx
doubleEndedQueue.enqueueFront('First element');
doubleEndedQueue.enqueueRear('Second element');
doubleEndedQueue.enqueueFront('Third element');
```

The result will be:

```tsx
['Third element', 'First element', 'Second element'];
```

If we dequeue as follows:

```tsx
const dequeuedFront = doubleEndedQueue.dequeueFront();
const dequeuedRear = doubleEndedQueue.dequeueRear();
```

The result will be:

```tsx
['First element'];
```
