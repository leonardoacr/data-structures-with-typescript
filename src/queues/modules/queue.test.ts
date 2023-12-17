import { Queue } from './queue.class';

describe('Queue', () => {
  let queue: Queue;
  let firstElement: string;
  let secondElement: string;

  beforeEach(() => {
    firstElement = 'First element';
    secondElement = 'Second element';
    queue = new Queue();
  });

  test('Should enqueue new element', () => {
    queue.enqueue(firstElement);
    expect(queue.peek()).toBe(firstElement);

    queue.enqueue(secondElement);
    expect(queue.peek()).toBe(firstElement);
  });

  test('Should dequeue element', () => {
    queue.enqueue(firstElement);
    queue.enqueue(secondElement);

    const dequeuedElement = queue.dequeue();
    expect(dequeuedElement).toBe(firstElement);
  });

  test('Should clear queue', () => {
    queue.enqueue('First element');
    queue.clear();

    expect(queue.peek()).toBeUndefined();

    queue.enqueue(firstElement);
    queue.dequeue();

    expect(queue.peek()).toBeUndefined();
  });

  test('Should peek', () => {
    queue.enqueue(firstElement);
    queue.enqueue(secondElement);
    expect(queue.peek()).toBe(firstElement);
  });

  test('isEmpty', () => {
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(firstElement);
    expect(queue.isEmpty()).toBe(false);
  });

  test('size', () => {
    queue.enqueue(firstElement);
    expect(queue.size()).toBe(1);
    queue.clear();
    expect(queue.size()).toBe(0);
  });

  test('toString', () => {
    queue.enqueue(firstElement);
    queue.enqueue(secondElement);
    expect(queue.toString()).toBe(`${firstElement},${secondElement}`);
  });
});
