import { CircularLinkedList } from './circular-linked-list.class';

describe('CircularLinkedList', () => {
  let circularLinkedList: CircularLinkedList<string>;
  let firstElement: string;
  let secondElement: string;
  let thirdElement: string;

  beforeEach(() => {
    firstElement = 'First element';
    secondElement = 'Second element';
    thirdElement = 'Third element';
    circularLinkedList = new CircularLinkedList();
  });

  test('Should push new element', () => {
    circularLinkedList.push(firstElement);
    circularLinkedList.push(secondElement);
    expect(circularLinkedList.getElementAt(0)?.element).toBe(firstElement);
    expect(circularLinkedList.getElementAt(1)?.element).toBe(secondElement);
    expect(circularLinkedList.getElementAt(2)?.element).toBe(firstElement);
    expect(circularLinkedList.getElementAt(3)?.element).toBe(secondElement);
    expect(circularLinkedList.size()).toBe(2);
  });

  test('Should insert new element', () => {
    circularLinkedList.push(firstElement);
    circularLinkedList.push(thirdElement);
    circularLinkedList.insert(secondElement, 1);
    expect(circularLinkedList.getElementAt(0)?.element).toBe(firstElement);
    expect(circularLinkedList.getElementAt(1)?.element).toBe(secondElement);
    expect(circularLinkedList.getElementAt(2)?.element).toBe(thirdElement);
    expect(circularLinkedList.getElementAt(3)?.element).toBe(firstElement);
    expect(circularLinkedList.getElementAt(4)?.element).toBe(secondElement);
    expect(circularLinkedList.size()).toBe(3);
  });

  test('Should remove element at start', () => {
    circularLinkedList.push(firstElement);
    circularLinkedList.push(secondElement);
    circularLinkedList.insert(thirdElement, 0);
    expect(circularLinkedList.removeAt(0)).toBe(thirdElement);
    expect(circularLinkedList.size()).toBe(2);
  });

  test('Should remove element at end', () => {
    circularLinkedList.push(firstElement);
    circularLinkedList.push(secondElement);
    circularLinkedList.insert(thirdElement, 0);
    expect(circularLinkedList.removeAt(2)).toBe(secondElement);
    expect(circularLinkedList.size()).toBe(2);
  });

  test('Should remove element at start beyond end', () => {
    circularLinkedList.push(firstElement);
    circularLinkedList.push(secondElement);
    circularLinkedList.insert(thirdElement, 0);

    expect(circularLinkedList.getElementAt(0)?.element).toBe(thirdElement);
    expect(circularLinkedList.getElementAt(1)?.element).toBe(firstElement);
    expect(circularLinkedList.getElementAt(2)?.element).toBe(secondElement);

    circularLinkedList.removeAt(4);

    expect(circularLinkedList.getElementAt(0)?.element).toBe(thirdElement);
    expect(circularLinkedList.getElementAt(1)?.element).toBe(secondElement);
    expect(circularLinkedList.size()).toBe(2);
  });

  test('Should remove element', () => {
    circularLinkedList.push(firstElement);
    circularLinkedList.push(secondElement);
    circularLinkedList.insert(thirdElement, 0);
    circularLinkedList.remove(thirdElement);
    expect(circularLinkedList.head?.next?.element).toBe(secondElement);
  });

  test('Should get the index of a element', () => {
    circularLinkedList.push(firstElement);
    circularLinkedList.push(secondElement);
    circularLinkedList.insert(thirdElement, 0);
    expect(circularLinkedList.indexOf(thirdElement)).toBe(0);
    expect(circularLinkedList.indexOf(firstElement)).toBe(1);
    expect(circularLinkedList.indexOf(secondElement)).toBe(2);
  });

  test('Should get the size of the linked list', () => {
    expect(circularLinkedList.size()).toBe(0);
    circularLinkedList.push(firstElement);
    expect(circularLinkedList.size()).toBe(1);
    circularLinkedList.push(secondElement);
    expect(circularLinkedList.size()).toBe(2);
    circularLinkedList.insert(thirdElement, 0);
    expect(circularLinkedList.size()).toBe(3);
    circularLinkedList.remove(thirdElement);
    expect(circularLinkedList.size()).toBe(2);
  });

  test('Should get elements as string', () => {
    circularLinkedList.push(firstElement);
    circularLinkedList.push(secondElement);
    circularLinkedList.insert(thirdElement, 0);
    expect(circularLinkedList.toString()).toBe(
      `${thirdElement}, ${firstElement}, ${secondElement}`
    );
  });
});
