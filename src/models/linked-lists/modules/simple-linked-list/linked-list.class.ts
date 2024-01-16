import { defaultEquals } from '../../../../utils/defaultEquals';
import { LinkedListMethods } from './linked-list.interface';
import { Node } from './node.class';
import { LinkedListUtils } from '../utils/linked-list.utils';

export class LinkedList<T>
  extends LinkedListUtils
  implements LinkedListMethods<T>
{
  count: number;
  head: Node<T> | undefined;
  equalsFn: <T>(a: T, b: T) => boolean;

  constructor(equalsFn = defaultEquals) {
    super();
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
      this.count++;
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
        this.count++;
      }
    }
  }

  getElementAt(targetPosition: number): Node<T> | undefined {
    if (!this.isValidPosition(targetPosition) || !this.head) return;

    let currentPosition = 0;
    let currentCircularNode: Node<T> | undefined = this.head;

    do {
      if (currentPosition === targetPosition) {
        return currentCircularNode;
      }

      currentCircularNode = currentCircularNode?.next;
      currentPosition++;
    } while (currentCircularNode !== undefined);

    return;
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

  remove(element: T): void {
    if (this.head?.element === element) {
      this.removeAt(0);
    } else {
      const indexToRemove = this.indexOf(element);
      this.removeAt(indexToRemove);
    }
  }

  indexOf<T>(element: T): number {
    if (this.head?.element === element) {
      return 0;
    } else {
      let node = this.head;
      let counter = 0;
      while (node?.element !== element) {
        node = node?.next;
        counter++;
      }

      return counter;
    }
  }

  size(): number {
    return this.count;
  }

  toString(): string {
    let node = this.head;
    if (!node) return '';

    let result = `${node.element}`;
    while (node?.next !== undefined) {
      node = node?.next;
      result += `, ${node.element}`;
    }

    return result;
  }
}
