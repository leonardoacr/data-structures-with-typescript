import { defaultEquals } from '../../../utils/defaultEquals';
import { LinkedListMethods } from './linked-list.interface';
import { Node } from './../../../helpers/node.class';

export class LinkedList<T> implements LinkedListMethods<T> {
  count: number;
  head: Node<T> | undefined;
  equalsFn: <T>(a: T, b: T) => boolean;

  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element: T): void {
    const node = new Node(element);
    this.count++;

    if (!this.head) {
      this.head = node;
      return;
    }

    let current: Node<T> = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  insert(element: T, positionTarget: number): void {
    if (positionTarget < 0 || positionTarget > this.count) return;

    const newNode = new Node(element);

    if (positionTarget === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let currentNode = this.head;

      let position = 0;
      while (currentNode && position < positionTarget - 1) {
        currentNode = currentNode.next;
        position++;
      }

      if (currentNode) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
      }
    }
  }

  getElementAt(targetPosition: number): Node<T> | undefined {
    if (!this.isValidPosition(targetPosition)) return;

    if (targetPosition === 0) {
      return this.head;
    } else {
      let currentNode = this.head;

      let position = 0;
      while (currentNode && position < targetPosition - 1) {
        currentNode = currentNode.next;
        position++;
      }

      return currentNode;
    }
  }

  removeAt(targetPosition: number): T | undefined {
    if (!this.isValidPosition(targetPosition)) return;

    let current = this.head;
    if (targetPosition === 0) {
      this.head = current?.next;
    } else {
      let previous;
      for (let i = 0; i < targetPosition; i++) {
        previous = current;
        current = current?.next;
      }
      if (previous?.next) previous.next = current?.next;
    }
    this.count--;
    return current?.element;
  }

  remove<T>(element: T): void {
    throw new Error('Method not implemented.');
  }

  indexOf<T>(element: T): number {
    throw new Error('Method not implemented.');
  }

  size(): number {
    throw new Error('Method not implemented.');
  }
  toString(): string {
    throw new Error('Method not implemented.');
  }

  private isValidPosition(position: number): boolean {
    return position >= 0 && position <= this.count;
  }
}
