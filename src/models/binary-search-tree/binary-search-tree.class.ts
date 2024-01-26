import { defaultEquals } from '../../utils/defaultEquals';
import { BinarySearchTreeMethods } from './binary-search-tree-methods.interface';
import { BinarySearchTreeNode } from './binary-search-tree-node';

export default class BinarySearchTree<T> implements BinarySearchTreeMethods<T> {
  root: BinarySearchTreeNode<T> | null;
  equalsFn: <T>(a: T, b: T) => boolean;

  constructor(compareFn = defaultEquals) {
    this.equalsFn = compareFn;
    this.root = null;
  }

  insert(key: T): void {
    throw new Error('Method not implemented.');
  }
  search(key: T): boolean {
    throw new Error('Method not implemented.');
  }
  inOrderTraverse(): void {
    throw new Error('Method not implemented.');
  }
  preOrderTraverse(): void {
    throw new Error('Method not implemented.');
  }
  postOrderTraverse(): void {
    throw new Error('Method not implemented.');
  }
  min(): BinarySearchTreeNode<T> {
    throw new Error('Method not implemented.');
  }
  max(): BinarySearchTreeNode<T> {
    throw new Error('Method not implemented.');
  }
  removeKey(key: T): void {
    throw new Error('Method not implemented.');
  }
}
