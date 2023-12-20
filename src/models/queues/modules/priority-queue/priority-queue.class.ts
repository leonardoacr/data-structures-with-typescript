import {
  PriorityQueueItems,
  PriorityQueueItem,
  PriorityQueueMethods
} from './priority-queue.interface';

export class PriorityQueue implements PriorityQueueMethods {
  private items: PriorityQueueItems[];

  constructor() {
    this.items = [];
  }

  enqueue(element: PriorityQueueItem, priority: number): void {
    const queueElement = { element, priority };

    let added = false;
    for (let i = 0; i < this.items.length; i++) {
      if (priority < this.items[i].priority) {
        this.items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }

    if (!added) {
      this.items.push(queueElement);
    }
  }

  dequeue(): PriorityQueueItem {
    if (this.isEmpty()) return;

    return this.items.shift()?.element;
  }

  peek(): PriorityQueueItem {
    if (this.isEmpty()) return;

    return this.items[0].element;
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
    if (this.isEmpty()) {
      return '';
    }

    let objString = `${this.items[0].element} (priority: ${this.items[0].priority})`;

    for (let i = 1; i < this.items.length; i++) {
      objString = `${objString},${this.items[i].element} (priority: ${this.items[i].priority})`;
    }

    return objString;
  }
}
