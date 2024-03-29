export interface QueueMethods {
  enqueue(element: Omit<QueueItem, 'undefined'>): void;
  dequeue(): QueueItem;
  peek(): QueueItem;
  isEmpty(): boolean;
  size(): number;
  clear(): void;
  toString(): string;
}

export type QueueItem = number | string | undefined;

export interface QueueItems {
  [key: number]: QueueItem;
}
