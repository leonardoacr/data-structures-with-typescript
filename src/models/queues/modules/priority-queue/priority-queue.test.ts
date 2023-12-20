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
    console.log('Should enqueue new element with priority');

    priorityQueue.enqueue(firstElement, 2);
    console.log(
      'After enqueuing first element with priority 2:',
      priorityQueue.toString()
    );
    expect(priorityQueue.peek()).toBe(firstElement);

    priorityQueue.enqueue(secondElement, 1);
    console.log(
      'After enqueuing second element with priority 1:',
      priorityQueue.toString()
    );
    expect(priorityQueue.peek()).toBe(secondElement);
  });

  test('Should dequeue element based on priority', () => {
    console.log('Should dequeue element based on priority');
    priorityQueue.enqueue(firstElement, 2);
    priorityQueue.enqueue(secondElement, 1);

    console.log('Before dequeue:', priorityQueue.toString());

    const dequeuedElement = priorityQueue.dequeue();
    console.log(
      `After dequeueing ${dequeuedElement}:`,
      priorityQueue.toString()
    );

    expect(dequeuedElement).toBe(secondElement);
  });

  test('Should clear priority queue', () => {
    console.log('Should clear priority queue');
    priorityQueue.enqueue(firstElement, 2);
    console.log('Before clearing priority queue:', priorityQueue.toString());

    priorityQueue.clear();
    console.log('After clearing priority queue:', priorityQueue.toString());

    expect(priorityQueue.peek()).toBeUndefined();

    priorityQueue.enqueue(firstElement, 2);
    priorityQueue.dequeue();

    expect(priorityQueue.peek()).toBeUndefined();
  });

  test('Should peek', () => {
    console.log('Should peek');
    priorityQueue.enqueue(firstElement, 2);
    priorityQueue.enqueue(secondElement, 1);

    console.log('Before peek:', priorityQueue.toString());
    console.log('Peek:', priorityQueue.peek());

    expect(priorityQueue.peek()).toBe(secondElement);
  });

  test('isEmpty', () => {
    expect(priorityQueue.isEmpty()).toBe(true);
    priorityQueue.enqueue(firstElement, 2);
    expect(priorityQueue.isEmpty()).toBe(false);
  });

  test('Should get the size', () => {
    console.log('Should get the size');
    priorityQueue.enqueue(firstElement, 2);

    console.log('Before clearing:', priorityQueue.toString());
    console.log('Size:', priorityQueue.size());

    expect(priorityQueue.size()).toBe(1);

    priorityQueue.clear();
    console.log('After clearing:', priorityQueue.toString());
    console.log('Size:', priorityQueue.size());

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
