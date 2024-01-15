import { DoublyNode } from './doubly-node.class';
import { defaultEquals } from '../../../../utils/defaultEquals';
import { LinkedListUtils } from '../utils/linked-list.utils';
import { DoublyLinkedListMethods } from './doubly-linked-list.interface';

export class DoublyLinkedList<T>
  extends LinkedListUtils
  implements DoublyLinkedListMethods<T>
{
  head: DoublyNode<T> | undefined;
  tail: DoublyNode<T> | undefined;
  equalsFn: <T>(a: T, b: T) => boolean;

  constructor(equalsFn = defaultEquals) {
    super();
    this.count = 0;
    this.head = undefined;
    this.tail = undefined;
    this.equalsFn = equalsFn;
  }

  push(element: T): void {
    const node = new DoublyNode(element);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      if (this.tail) {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
      }
    }

    this.count++;
  }

  insert(element: T, positionTarget: number): void {
    if (positionTarget < 0 || positionTarget > this.count) return;

    const newNode = new DoublyNode(element);

    if (positionTarget === 0) {
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    } else {
      let currentNode = this.head;

      let position = 0;
      while (currentNode && position < positionTarget - 1) {
        currentNode = currentNode.next;
        position++;
      }

      if (currentNode) {
        newNode.next = currentNode.next;
        newNode.prev = currentNode;
        if (currentNode.next) {
          currentNode.next.prev = newNode;
        } else {
          this.tail = newNode;
        }
        currentNode.next = newNode;
      }
    }

    this.count++;
  }

  getElementAt(targetPosition: number): DoublyNode<T> | undefined {
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

  removeAt(position: number): T | undefined {
    if (!this.isValidPosition(position)) return undefined;

    const removedNode = this.getElementAt(position);

    if (removedNode) {
      const prevNode = removedNode.prev;
      const nextNode = removedNode.next;

      if (prevNode) {
        prevNode.next = nextNode;
      } else {
        this.head = nextNode;
        if (nextNode) {
          nextNode.prev = undefined;
        }
      }

      if (nextNode) {
        nextNode.prev = prevNode;
      } else {
        this.tail = prevNode;
        if (prevNode) {
          prevNode.next = undefined;
        }
      }

      this.count--;
      return removedNode.element;
    }

    return undefined;
  }

  remove(element: T): void {
    const index = this.indexOf(element);
    this.removeAt(index);
  }

  indexOf(element: T): number {
    let currentNode = this.head;
    let index = 0;

    while (currentNode) {
      if (this.equalsFn(element, currentNode.element)) {
        return index;
      }

      currentNode = currentNode.next;
      index++;
    }

    return -1;
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
