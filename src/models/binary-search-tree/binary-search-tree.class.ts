import { Compare } from '../../utils/compare.enum';
import { defaultCompare } from '../../utils/defaultCompare';
import { BinarySearchTreeMethods } from './binary-search-tree-methods.interface';
import { BinarySearchTreeNode } from './binary-search-tree-node';

export default class BinarySearchTree<T> implements BinarySearchTreeMethods<T> {
  root: BinarySearchTreeNode<T> | null;
  private readonly compareFn: <T>(a: T, b: T) => number;

  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.root = null;
  }

  insert(key: T): void {
    if (this.root == null) {
      this.root = new BinarySearchTreeNode(key);
    } else {
      this.insertNode(this.root, key);
    }
  }

  private insertNode(node: BinarySearchTreeNode<T>, key: T) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new BinarySearchTreeNode(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else {
      if (node.right == null) {
        node.right = new BinarySearchTreeNode(key);
      } else {
        this.insertNode(node.right, key);
      }
    }
  }

  search(key: T): boolean {
    if (this?.root) return this.searchNode(this.root, key);
    return false;
  }

  private searchNode(node: BinarySearchTreeNode<T>, key: T): boolean {
    if (key === node?.key) return true;
    if (this.compareFn(key, node?.key) === Compare.LESS_THAN) {
      return node?.left ? this.searchNode(node.left, key) : false;
    } else {
      return node?.right ? this.searchNode(node.right, key) : false;
    }
  }

  inOrderTraverse(callback: (value: T) => void): void {
    if (this.root) this.inOrderTraverseNode(this.root, callback);
  }

  private inOrderTraverseNode(
    node: BinarySearchTreeNode<T>,
    callback: (value: T) => void
  ): void {
    if (node?.left) this.inOrderTraverseNode(node.left, callback);
    callback(node.key);
    if (node?.right) this.inOrderTraverseNode(node.right, callback);
  }

  preOrderTraverse(callback: (value: T) => void): void {
    if (this.root) this.preOrderTraverseNode(this.root, callback);
  }

  private preOrderTraverseNode(
    node: BinarySearchTreeNode<T>,
    callback: (value: T) => void
  ): void {
    callback(node.key);
    if (node?.left) this.preOrderTraverseNode(node.left, callback);
    if (node?.right) this.preOrderTraverseNode(node.right, callback);
  }

  postOrderTraverse(callback: (value: T) => void): void {
    if (this.root) this.postOrderTraverseNode(this.root, callback);
  }

  private postOrderTraverseNode(
    node: BinarySearchTreeNode<T>,
    callback: (value: T) => void
  ): void {
    if (node?.left) this.postOrderTraverseNode(node.left, callback);
    if (node?.right) this.postOrderTraverseNode(node.right, callback);
    callback(node.key);
  }

  min(): T | undefined {
    if (this?.root) return this.minNode(this.root)?.key;
    return;
  }

  private minNode(node: BinarySearchTreeNode<T>): BinarySearchTreeNode<T> {
    if (node.left) return this.minNode(node.left);
    return node;
  }

  max(): T | undefined {
    if (this?.root) return this.maxNode(this.root);
    return;
  }

  private maxNode(node: BinarySearchTreeNode<T>): T {
    if (node.right) return this.maxNode(node.right);
    return node.key;
  }

  remove(key: T) {
    this.root = this.removeNode(this.root, key);
  }

  private removeNode(
    node: BinarySearchTreeNode<T> | null,
    key: T
  ): BinarySearchTreeNode<T> | null {
    if (!node) return null;
    if (this.compareFn(key, node?.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(node?.left, key);
      return node;
    } else if (this.compareFn(key, node.key) === Compare.GREATER_THAN) {
      node.right = this.removeNode(node?.right, key);
      return node;
    } else {
      if (!node.left && !node.right) return null;
      if (!node.left && node.right) return node.right;
      if (node.left && !node.right) return node.left;
      const minNode = this.minNode(node.right as BinarySearchTreeNode<T>);
      node.key = minNode.key;
      node.right = this.removeNode(node.right, minNode.key);
      return node;
    }
  }
}
