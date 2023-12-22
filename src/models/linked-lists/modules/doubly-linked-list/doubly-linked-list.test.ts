import { DoublyLinkedList } from './doubly-linked-list.class';

describe('DoublyLinkedList', () => {
  let doublyLinkedList: DoublyLinkedList<string>;
  let firstElement: string;
  let secondElement: string;
  let thirdElement: string;

  beforeEach(() => {
    firstElement = 'First element';
    secondElement = 'Second element';
    thirdElement = 'Third element';
    doublyLinkedList = new DoublyLinkedList();
  });

  test('Should push new element', () => {
    doublyLinkedList.push(firstElement);
    doublyLinkedList.push(secondElement);
    expect(doublyLinkedList.getElementAt(2)?.element).toBe(secondElement);
    expect(doublyLinkedList.getElementAt(1)?.element).toBe(firstElement);
    expect(doublyLinkedList.size()).toBe(2);
  });

  test('Should insert new element', () => {
    doublyLinkedList.insert(thirdElement, 0);
    doublyLinkedList.push(firstElement);
    doublyLinkedList.push(secondElement);
    expect(doublyLinkedList.getElementAt(0)?.element).toBe(thirdElement);
  });

  test('Should remove element at given position', () => {
    doublyLinkedList.push(firstElement);
    doublyLinkedList.push(secondElement);
    doublyLinkedList.insert(thirdElement, 0);
    expect(doublyLinkedList.removeAt(0)).toBe(thirdElement);
  });

  test('Should remove element', () => {
    doublyLinkedList.push(firstElement);
    doublyLinkedList.push(secondElement);
    doublyLinkedList.insert(thirdElement, 0);
    doublyLinkedList.remove(thirdElement);
    expect(doublyLinkedList.head?.next?.element).toBe(secondElement);
  });

  test('Should get the index of a element', () => {
    doublyLinkedList.push(firstElement);
    doublyLinkedList.push(secondElement);
    doublyLinkedList.insert(thirdElement, 0);
    expect(doublyLinkedList.indexOf(thirdElement)).toBe(0);
    expect(doublyLinkedList.indexOf(firstElement)).toBe(1);
    expect(doublyLinkedList.indexOf(secondElement)).toBe(2);
  });

  test('Should get the size of the linked list', () => {
    expect(doublyLinkedList.size()).toBe(0);
    doublyLinkedList.push(firstElement);
    expect(doublyLinkedList.size()).toBe(1);
    doublyLinkedList.push(secondElement);
    expect(doublyLinkedList.size()).toBe(2);
    doublyLinkedList.insert(thirdElement, 0);
    expect(doublyLinkedList.size()).toBe(3);
    doublyLinkedList.remove(thirdElement);
    expect(doublyLinkedList.size()).toBe(2);
  });

  test('Should get elements as string', () => {
    doublyLinkedList.push(firstElement);
    doublyLinkedList.push(secondElement);
    doublyLinkedList.insert(thirdElement, 0);
    expect(doublyLinkedList.toString()).toBe(
      `${thirdElement}, ${firstElement}, ${secondElement}`
    );
  });
});
