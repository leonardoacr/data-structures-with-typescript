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
    linkedList.push(firstElement);
    linkedList.push(secondElement);
    linkedList.insert(thirdElement, 0);
    expect(linkedList.removeAt(0)).toBe(thirdElement);
  });

  test('Should remove element', () => {
    linkedList.push(firstElement);
    linkedList.push(secondElement);
    linkedList.insert(thirdElement, 0);
    linkedList.remove(thirdElement);
    expect(linkedList.head?.next?.element).toBe(secondElement);
  });

  test('Should get the index of a element', () => {
    linkedList.push(firstElement);
    linkedList.push(secondElement);
    linkedList.insert(thirdElement, 0);
    expect(linkedList.indexOf(thirdElement)).toBe(0);
    expect(linkedList.indexOf(firstElement)).toBe(1);
    expect(linkedList.indexOf(secondElement)).toBe(2);
  });

  test('Should get the size of the linked list', () => {
    expect(linkedList.size()).toBe(0);
    linkedList.push(firstElement);
    expect(linkedList.size()).toBe(1);
    linkedList.push(secondElement);
    expect(linkedList.size()).toBe(2);
    linkedList.insert(thirdElement, 0);
    expect(linkedList.size()).toBe(3);
    linkedList.remove(thirdElement);
    expect(linkedList.size()).toBe(2);
  });

  test('Should get elements as string', () => {
    linkedList.push(firstElement);
    linkedList.push(secondElement);
    linkedList.insert(thirdElement, 0);
    expect(linkedList.toString()).toBe(
      `${thirdElement}, ${firstElement}, ${secondElement}`
    );
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
