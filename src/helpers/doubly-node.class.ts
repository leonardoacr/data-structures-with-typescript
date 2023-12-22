export class DoublyNode<T> {
  element: T;
  prev: DoublyNode<T> | undefined;
  next: DoublyNode<T> | undefined;

  constructor(element: T, prev?: DoublyNode<T>, next?: DoublyNode<T>) {
    this.element = element;
    this.prev = prev || undefined;
    this.next = next || undefined;
  }
}
