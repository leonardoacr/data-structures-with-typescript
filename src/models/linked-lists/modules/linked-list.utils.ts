export class LinkedListUtils<T> {
  protected count: number;

  constructor() {
    this.count = 0;
  }

  isValidPosition(position: number): boolean {
    return position >= 0 && position <= this.count;
  }
}
