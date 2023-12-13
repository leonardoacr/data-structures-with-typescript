import { StackMethodsArray } from './stack.interface';

export class Stack implements StackMethodsArray {
  items: number[];

  constructor() {
    this.items = [];
  }

  push(element: number) {
    this.items.push(element);
  }

  pop(): number | undefined {
    return this.items.pop();
  }

  peek(): number {
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
}
