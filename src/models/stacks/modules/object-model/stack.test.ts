import { Stack } from './stack.class';

describe('Stack', () => {
  let stack: Stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('push and pop', () => {
    stack.push(42);
    stack.push(431);
    stack.push(4);
    const poppedElement = stack.pop();
    expect(poppedElement).toBe(4);
  });

  test('peek', () => {
    stack.push(10);
    expect(stack.peek()).toBe(10);
  });

  test('isEmpty', () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(99);
    expect(stack.isEmpty()).toBe(false);
  });

  test('size', () => {
    stack.push(99);
    expect(stack.size()).toBe(1);
    stack.clear();
    expect(stack.size()).toBe(0);
  });
});
