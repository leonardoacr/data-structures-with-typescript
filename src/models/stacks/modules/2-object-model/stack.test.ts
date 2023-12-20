import { Stack } from './stack.class';

describe('Stack', () => {
  let stack: Stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('push and pop', () => {
    // Initial state
    console.log('Initial state:', stack.peek());

    // Pushing three elements
    stack.push(42);
    console.log('After pushing 42:', stack.peek());
    stack.push(431);
    console.log('After pushing 431:', stack.peek());
    stack.push(4);
    console.log('After pushing 4:', stack.peek());

    // Popping and checking the result
    const poppedElement = stack.pop();
    console.log('After popping:', stack.peek());
    console.log('Popped element:', poppedElement);

    // Assertion
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
