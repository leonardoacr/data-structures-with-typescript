export class BinarySearchTreeNode<T> {
  key: T;
  left: BinarySearchTreeNode<T> | undefined;
  right: BinarySearchTreeNode<T> | undefined;

  constructor(
    key: T,
    prev?: BinarySearchTreeNode<T>,
    next?: BinarySearchTreeNode<T>
  ) {
    this.key = key;
    this.left = prev || undefined;
    this.right = next || undefined;
  }
}
