export interface StackMethodsArray {
  push(element: number): void;
  pop(): number | undefined;
  peek(): number | undefined;
  isEmpty(): boolean;
  size(): number;
  clear(): void;
}
