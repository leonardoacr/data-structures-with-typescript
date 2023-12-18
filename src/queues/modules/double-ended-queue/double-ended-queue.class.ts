import {
  DoubleEndedQueueMethods,
  DoubleEndedQueueItem
} from './double-ended-queue.interface';

export class DoubleEndedQueue implements DoubleEndedQueueMethods {
  private items: DoubleEndedQueueItem[];

  constructor() {
    this.items = [];
  }

  enqueueFront(element: DoubleEndedQueueItem): void {
    this.items.unshift(element);
  }

  enqueueRear(element: DoubleEndedQueueItem): void {
    this.items.push(element);
  }

  dequeueFront(): DoubleEndedQueueItem {
    return this.items.shift();
  }

  dequeueRear(): DoubleEndedQueueItem {
    return this.items.pop();
  }

  peekFront(): DoubleEndedQueueItem {
    return this.items[0];
  }

  peekRear(): DoubleEndedQueueItem {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  clear(): void {
    this.items = [];
  }

  toString(): string {
    return this.items.toString();
  }
}
