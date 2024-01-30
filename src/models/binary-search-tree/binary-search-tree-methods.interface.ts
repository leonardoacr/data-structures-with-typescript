export interface BinarySearchTreeMethods<T> {
  insert(key: T): void;
  search(key: T): boolean;
  inOrderTraverse(callback: (value: T) => void): void;
  preOrderTraverse(callback: (value: T) => void): void;
  postOrderTraverse(callback: (value: T) => void): void;
  min(): T | undefined;
  max(): T | undefined;
  remove(key: T): void;
}
