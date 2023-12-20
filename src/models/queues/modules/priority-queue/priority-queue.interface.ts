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
