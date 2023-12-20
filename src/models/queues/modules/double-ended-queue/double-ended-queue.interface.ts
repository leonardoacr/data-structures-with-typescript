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
