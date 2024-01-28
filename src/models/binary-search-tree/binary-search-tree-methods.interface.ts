import { BinarySearchTreeNode } from './binary-search-tree-node';

export interface BinarySearchTreeMethods<T> {
  insert(key: T): void;
  search(key: T): boolean;
  inOrderTraverse(callback: (value: T) => void): void;
  preOrderTraverse(callback: (value: T) => void): void;
  postOrderTraverse(callback: (value: T) => void): void;
  min(): BinarySearchTreeNode<T>;
  max(): BinarySearchTreeNode<T>;
  removeKey(key: T): void;
}
