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
    expect(linkedList.getElementAt(1)?.element).toBe(firstElement);
    expect(linkedList.getElementAt(2)?.element).toBe(secondElement);
    expect(linkedList.getElementAt(3)?.element).toBe(undefined);
  });

  test('Should insert new element', () => {
    linkedList.insert(thirdElement, 0);
    linkedList.push(firstElement);
    linkedList.push(secondElement);
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
});
