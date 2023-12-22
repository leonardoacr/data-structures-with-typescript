import { DoublyNode } from '../../../../helpers/doubly-node.class';

export interface DoublyLinkedListMethods<T> {
  push(element: T): void;
  insert(element: T, position: number): void;
  getElementAt(position: number): DoublyNode<T> | undefined;
  removeAt(position: number): T | undefined;
  remove(element: T): void;
  indexOf(element: T): number;
  size(): number;
  toString(): string;
}
