import { defaultEquals } from '../../../../utils/defaultEquals';
import { LinkedListUtils } from '../utils/linked-list.utils';
import { CircularLinkedListMethods } from './circular-linked-list.interface';
import { CircularNode } from './circular-node.class';

export class CircularLinkedList<T>
  extends LinkedListUtils
  implements CircularLinkedListMethods<T>
{
  count: number;
  head: CircularNode<T> | undefined;
  equalsFn: <T>(a: T, b: T) => boolean;

  constructor(equalsFn = defaultEquals) {
    super();
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element: T): void {
    const circularNode = new CircularNode(element);
    this.count++;

    if (!this.head) {
      circularNode.next = circularNode;
      this.head = circularNode;
    } else {
      let current: CircularNode<T> | undefined = this.head;
      while (current && current.next !== this.head) {
        current = current.next;
      }
      if (current) {
        current.next = circularNode;
        circularNode.next = this.head;
      }
    }
  }

  insert(element: T, targetPosition: number): void {
    if (targetPosition < 0 || targetPosition > this.count) return;

    const newCircularNode = new CircularNode(element);

    if (targetPosition === 0) {
      if (!this.head) {
        newCircularNode.next = newCircularNode;
      } else {
        newCircularNode.next = this.head;
        const lastNode = this.getElementAt(this.count - 1);
        if (lastNode) {
          lastNode.next = newCircularNode;
        }
      }
      this.head = newCircularNode;
      this.count++;
    } else {
      const currentCircularNode = this.getElementAt(targetPosition - 1);

      if (currentCircularNode) {
        newCircularNode.next = currentCircularNode.next;
        currentCircularNode.next = newCircularNode;
        this.count++;
      }
    }
  }

  getElementAt(targetPosition: number): CircularNode<T> | undefined {
    if (!this.head) return;

    let currentPosition = 0;
    let currentCircularNode: CircularNode<T> | undefined = this.head;
    while (currentPosition < targetPosition) {
      currentCircularNode = currentCircularNode?.next;
      currentPosition++;
    }

    return currentCircularNode;
  }

  removeAt(targetPosition: number): T | undefined {
    let current = this.head;

    if (targetPosition === 0) {
      if (this.count === 1) {
        this.head = undefined;
      } else {
        const lastNode = this.getElementAt(this.count - 1);
        if (lastNode) {
          this.head = current?.next;
          lastNode.next = this.head;
        }
      }
    } else {
      let previous;
      for (let i = 0; i < targetPosition; i++) {
        previous = current;
        current = current?.next;
      }
      if (previous && current) {
        previous.next = current.next;
      }
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
      let circularNode = this.head;
      let counter = 0;
      while (circularNode?.element !== element) {
        circularNode = circularNode?.next;
        counter++;
      }

      return counter;
    }
  }

  size(): number {
    return this.count;
  }

  toString(): string {
    const circularNode = this.head;
    if (!circularNode) return '';

    let result = `${circularNode.element}`;
    let current = circularNode.next;

    while (current !== this.head) {
      result += `, ${current?.element}`;
      current = current?.next;
    }

    return result;
  }
}
