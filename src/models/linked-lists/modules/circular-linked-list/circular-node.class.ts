export class CircularNode<T> {
  element: T;
  next: CircularNode<T> | undefined;

  constructor(element: T, next?: CircularNode<T>) {
    this.element = element;
    this.next = next;
  }
}
