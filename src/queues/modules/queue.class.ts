import { QueueItem, QueueItems, QueueMethods } from './queue.interface';

export class Queue implements QueueMethods {
  private count: number;
  private lowestCount: number;
  private items: QueueItems;

  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  enqueue(element: string): void {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue(): QueueItem {
    if (this.isEmpty()) return;
    const result: QueueItem = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount--;
    return result;
  }

  peek(): QueueItem {
    if (this.isEmpty()) return;
    return this.items[this.lowestCount];
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  size(): number {
    return this.count - this.lowestCount;
  }

  clear(): void {
    this.items = {};
    this.lowestCount = 0;
    this.count = 0;
  }
}
