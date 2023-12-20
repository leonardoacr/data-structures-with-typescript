import { LinkedList } from './linked-list.class';

describe('LinkedList', () => {
  let linkedList: LinkedList<string>;
  let firstElement: string;
  let secondElement: string;
  let thirdElement: string;

  beforeEach(() => {
    firstElement = 'First element';
    secondElement = 'Second element';
    thirdElement = 'Third element';
    linkedList = new LinkedList();
  });

  test('Should push new element', () => {
    linkedList.push(firstElement);
    linkedList.push(secondElement);
    expect(linkedList.getElementAt(2)?.element).toBe(secondElement);
  });

  test('Should insert new element', () => {
    linkedList.push(firstElement);
    linkedList.push(secondElement);
    linkedList.insert(thirdElement, 0);
    expect(linkedList.getElementAt(0)?.element).toBe(thirdElement);
  });

  test('Should remove element at given position', () => {
    console.log('Should remove element at given position');
    linkedList.push(firstElement);
    linkedList.push(secondElement);
    linkedList.insert(thirdElement, 0);
    expect(linkedList.removeAt(0)).toBe(thirdElement);
  });

  // test('Should dequeue element', () => {
  //   queue.enqueue(firstElement);
  //   queue.enqueue(secondElement);

  //   const dequeuedElement = queue.dequeue();
  //   expect(dequeuedElement).toBe(firstElement);
  // });

  // test('Should clear queue', () => {
  //   queue.enqueue('First element');
  //   queue.clear();

  //   expect(queue.peek()).toBeUndefined();

  //   queue.enqueue(firstElement);
  //   queue.dequeue();

  //   expect(queue.peek()).toBeUndefined();
  // });

  // test('Should peek', () => {
  //   queue.enqueue(firstElement);
  //   queue.enqueue(secondElement);
  //   expect(queue.peek()).toBe(firstElement);
  // });

  // test('isEmpty', () => {
  //   expect(queue.isEmpty()).toBe(true);
  //   queue.enqueue(firstElement);
  //   expect(queue.isEmpty()).toBe(false);
  // });

  // test('Should get the size', () => {
  //   queue.enqueue(firstElement);
  //   expect(queue.size()).toBe(1);
  //   queue.clear();
  //   expect(queue.size()).toBe(0);
  // });

  // test('toString', () => {
  //   queue.enqueue(firstElement);
  //   queue.enqueue(secondElement);
  //   expect(queue.toString()).toBe(`${firstElement},${secondElement}`);
  // });
});
