export class BinarySearchTreeNode<T> {
  key: T;
  left: BinarySearchTreeNode<T> | null;
  right: BinarySearchTreeNode<T> | null;

  constructor(
    key: T,
    prev?: BinarySearchTreeNode<T>,
    next?: BinarySearchTreeNode<T>
  ) {
    this.key = key;
    this.left = prev || null;
    this.right = next || null;
  }
}
