import { Node } from '../../../../helpers/node.class';

export interface LinkedListMethods<T> {
  push(element: T): void;
  insert(element: T, position: number): void;
  getElementAt(position: number): Node<T> | undefined;
  removeAt(position: number): T | undefined;
  remove(element: T): void;
  indexOf(element: T): number;
  size(): number;
  toString(): string;
}
