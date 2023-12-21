import { PriorityQueue } from './priority-queue.class';

describe('PriorityQueue', () => {
  let priorityQueue: PriorityQueue;
  let firstElement: string;
  let secondElement: string;

  beforeEach(() => {
    firstElement = 'First element';
    secondElement = 'Second element';
    priorityQueue = new PriorityQueue();
  });

  test('Should enqueue new element with priority', () => {
    priorityQueue.enqueue(firstElement, 2);
    expect(priorityQueue.peek()).toBe(firstElement);
    priorityQueue.enqueue(secondElement, 1);
    expect(priorityQueue.peek()).toBe(secondElement);
  });

  test('Should dequeue element based on priority', () => {
    priorityQueue.enqueue(firstElement, 2);
    priorityQueue.enqueue(secondElement, 1);
    const dequeuedElement = priorityQueue.dequeue();
    expect(dequeuedElement).toBe(secondElement);
  });

  test('Should clear priority queue', () => {
    priorityQueue.enqueue(firstElement, 2);
    priorityQueue.clear();
    expect(priorityQueue.peek()).toBeUndefined();
    priorityQueue.enqueue(firstElement, 2);
    priorityQueue.dequeue();
    expect(priorityQueue.peek()).toBeUndefined();
  });

  test('Should peek', () => {
    priorityQueue.enqueue(firstElement, 2);
    priorityQueue.enqueue(secondElement, 1);
    expect(priorityQueue.peek()).toBe(secondElement);
  });

  test('isEmpty', () => {
    expect(priorityQueue.isEmpty()).toBe(true);
    priorityQueue.enqueue(firstElement, 2);
    expect(priorityQueue.isEmpty()).toBe(false);
  });

  test('Should get the size', () => {
    priorityQueue.enqueue(firstElement, 2);
    expect(priorityQueue.size()).toBe(1);
    priorityQueue.clear();
    expect(priorityQueue.size()).toBe(0);
  });

  test('toString', () => {
    priorityQueue.enqueue(firstElement, 2);
    priorityQueue.enqueue(secondElement, 1);

    expect(priorityQueue.toString()).toBe(
      `${secondElement} (priority: 1),${firstElement} (priority: 2)`
    );
  });
});
