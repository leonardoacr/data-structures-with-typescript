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
    console.log('After enqueuing at the front:', doubleEndedQueue.toString());

    doubleEndedQueue.enqueueRear(secondElement);
    console.log('After enqueuing at the rear:', doubleEndedQueue.toString());

    const dequeuedFront = doubleEndedQueue.dequeueFront();
    console.log('After dequeuing from the front:', dequeuedFront);
    console.log(doubleEndedQueue.toString());

    const dequeuedRear = doubleEndedQueue.dequeueRear();
    console.log('After dequeuing from the rear:', dequeuedRear);
    console.log(doubleEndedQueue.toString());

    expect(dequeuedFront).toBe(firstElement);
    expect(dequeuedRear).toBe(secondElement);
  });

  test('Should clear double-ended queue', () => {
    doubleEndedQueue.enqueueFront(firstElement);
    doubleEndedQueue.enqueueRear(secondElement);

    console.log(
      'Before clearing double-ended queue:',
      doubleEndedQueue.toString()
    );

    doubleEndedQueue.clear();
    console.log(
      'After clearing double-ended queue:',
      doubleEndedQueue.toString()
    );

    expect(doubleEndedQueue.peekFront()).toBeUndefined();
    expect(doubleEndedQueue.peekRear()).toBeUndefined();
  });

  test('Should peek front and rear', () => {
    doubleEndedQueue.enqueueFront(firstElement);
    doubleEndedQueue.enqueueRear(secondElement);

    console.log('Before peeking front and rear:', doubleEndedQueue.toString());
    console.log('Peek front:', doubleEndedQueue.peekFront());
    console.log('Peek rear:', doubleEndedQueue.peekRear());

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
    console.log('Before clearing:', doubleEndedQueue.toString());
    console.log('Size:', doubleEndedQueue.size());

    expect(doubleEndedQueue.size()).toBe(1);

    doubleEndedQueue.clear();
    console.log('After clearing:', doubleEndedQueue.toString());
    console.log('Size:', doubleEndedQueue.size());

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
