import { StackMethodsObject, StackItems } from './stack.interface';

export class Stack implements StackMethodsObject {
  count: number;
  items: StackItems;

  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element: number) {
    this.items[this.count] = element;
    this.count++;
  }

  pop(): number | undefined {
    if (this.isEmpty()) return undefined;
    const removedItem = this.items[this.count - 1];
    delete this.items[this.count];
    this.count--;
    return removedItem;
  }

  peek(): number | undefined {
    if (this.isEmpty()) return undefined;
    return this.items[this.count - 1];
  }

  toString(): string {
    if (this.isEmpty()) return '';
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }
    return `[${objString}]`;
  }

  isEmpty(): boolean {
    return Object.keys(this.items).length === 0;
  }

  size(): number {
    return this.count;
  }

  clear(): void {
    this.items = {};
    this.count = 0;
  }
}
