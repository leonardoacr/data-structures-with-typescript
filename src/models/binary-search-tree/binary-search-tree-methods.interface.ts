import { BinarySearchTreeNode } from './binary-search-tree-node';

export interface BinarySearchTreeMethods<T> {
  insert(key: T): void;
  search(key: T): boolean;
  inOrderTraverse(): void;
  preOrderTraverse(): void;
  postOrderTraverse(): void;
  min(): BinarySearchTreeNode<T>;
  max(): BinarySearchTreeNode<T>;
  removeKey(key: T): void;
}
