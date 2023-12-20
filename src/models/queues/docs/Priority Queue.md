# Priority Queue

A Priority Queue is an abstract data type similar to a regular queue or stack, but each element in the queue has a priority associated with it. Elements with higher priority are served before elements with lower priority.

We can modify the interface for the simple queue to the priority queue, but changing the object structure with simple key-value to key-[value, priority], so we can define priorities for each value.

```tsx
export interface PriorityQueueMethods {
  enqueue(element: PriorityQueueItem, priority: number): void;
  dequeue(): PriorityQueueItem;
  peek(): PriorityQueueItem;
  isEmpty(): boolean;
  size(): number;
  clear(): void;
  toString(): string;
}

export type PriorityQueueItem = number | string | undefined;

export interface PriorityQueueItems {
  element: PriorityQueueItem;
  priority: number;
}
```

If we enqueue the follow elements:

```tsx
priorityQueue.enqueue('First element, Priority 1', 1);
priorityQueue.enqueue('First element, Priority 2', 2);
priorityQueue.enqueue('Second element, Priority 1', 1);
priorityQueue.enqueue('Third element, Priority 1', 1);
```

We should expect the following result:

```tsx
[
  { element: 'First element, Priority 1', priority: 1 },
  { element: 'Second element, Priority 1', priority: 1 },
  { element: 'Third element, Priority 1', priority: 1 },
  { element: 'First element, Priority 2', priority: 2 }
];
```
