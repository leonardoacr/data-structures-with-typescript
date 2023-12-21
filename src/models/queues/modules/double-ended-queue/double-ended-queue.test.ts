import { DoubleEndedQueue } from './double-ended-queue.class';

describe('DoubleEndedQueue', () => {
  let doubleEndedQueue: DoubleEndedQueue;
  let firstElement: string;
  let secondElement: string;

  beforeEach(() => {
    firstElement = 'First element';
    secondElement = 'Second element';
    doubleEndedQueue = new DoubleEndedQueue();
  });

  test('Should enqueue and dequeue elements from the front and rear', () => {
    doubleEndedQueue.enqueueFront(firstElement);
    doubleEndedQueue.enqueueRear(secondElement);
    const dequeuedFront = doubleEndedQueue.dequeueFront();
    const dequeuedRear = doubleEndedQueue.dequeueRear();
    expect(dequeuedFront).toBe(firstElement);
    expect(dequeuedRear).toBe(secondElement);
  });

  test('Should clear double-ended queue', () => {
    doubleEndedQueue.enqueueFront(firstElement);
    doubleEndedQueue.enqueueRear(secondElement);
    doubleEndedQueue.clear();
    expect(doubleEndedQueue.peekFront()).toBeUndefined();
    expect(doubleEndedQueue.peekRear()).toBeUndefined();
  });

  test('Should peek front and rear', () => {
    doubleEndedQueue.enqueueFront(firstElement);
    doubleEndedQueue.enqueueRear(secondElement);
    expect(doubleEndedQueue.peekFront()).toBe(firstElement);
    expect(doubleEndedQueue.peekRear()).toBe(secondElement);
  });

  test('isEmpty', () => {
    expect(doubleEndedQueue.isEmpty()).toBe(true);
    doubleEndedQueue.enqueueFront(firstElement);
    expect(doubleEndedQueue.isEmpty()).toBe(false);
  });

  test('Should get the size', () => {
    doubleEndedQueue.enqueueFront(firstElement);
    expect(doubleEndedQueue.size()).toBe(1);

    doubleEndedQueue.clear();
    expect(doubleEndedQueue.size()).toBe(0);
  });

  test('toString', () => {
    doubleEndedQueue.enqueueFront(firstElement);
    doubleEndedQueue.enqueueRear(secondElement);
    expect(doubleEndedQueue.toString()).toBe(
      `${firstElement},${secondElement}`
    );
  });
});
