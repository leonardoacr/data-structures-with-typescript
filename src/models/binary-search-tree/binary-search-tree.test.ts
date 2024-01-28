import BinarySearchTree from './binary-search-tree.class';

describe('BinarySearchTree', () => {
  let binarySearchTree: BinarySearchTree<number>;
  let firstElement: number;
  let secondElement: number;
  let thirdElement: number;
  let fourthElement: number;

  beforeEach(() => {
    firstElement = 123;
    secondElement = 456;
    thirdElement = 87;
    fourthElement = 231;
    binarySearchTree = new BinarySearchTree();
  });

  test('Should insert new element', () => {
    binarySearchTree.insert(firstElement);
    binarySearchTree.insert(secondElement);
    binarySearchTree.insert(thirdElement);
    binarySearchTree.insert(fourthElement);
    expect(binarySearchTree.root?.key).toBe(firstElement);
    secondElement >= firstElement
      ? expect(binarySearchTree.root?.right?.key).toBe(secondElement)
      : expect(binarySearchTree.root?.left?.key).toBe(secondElement);
  });

  test('Should search an element', () => {
    binarySearchTree.insert(firstElement);
    binarySearchTree.insert(secondElement);
    binarySearchTree.insert(thirdElement);
    expect(binarySearchTree.search(firstElement)).toBeTruthy();
    expect(binarySearchTree.search(secondElement)).toBeTruthy();
    expect(binarySearchTree.search(thirdElement)).toBeTruthy();
    expect(binarySearchTree.search(fourthElement)).toBeFalsy();
  });

  test('Should in order traverse a callback function', () => {
    binarySearchTree.insert(firstElement);
    binarySearchTree.insert(secondElement);
    binarySearchTree.insert(thirdElement);
    const orderedTree: number[] = [];
    const pushNodeValue = (value: number) => orderedTree.push(value);
    binarySearchTree.inOrderTraverse(pushNodeValue);
    const referenceElements = [firstElement, secondElement, thirdElement].sort(
      function (a, b) {
        return a - b;
      }
    );
    expect(orderedTree).toEqual(referenceElements);
  });

  test('Should pre order traverse a callback function', () => {
    binarySearchTree.insert(firstElement);
    binarySearchTree.insert(secondElement);
    binarySearchTree.insert(thirdElement);
    binarySearchTree.insert(fourthElement);
    const preOrderedTree: number[] = [];
    const pushNodeValue = (value: number) => preOrderedTree.push(value);
    binarySearchTree.preOrderTraverse(pushNodeValue);
    const referenceElements = [
      firstElement,
      thirdElement,
      secondElement,
      fourthElement
    ];

    expect(preOrderedTree).toEqual(referenceElements);
  });

  test('Should post order traverse a callback function', () => {
    binarySearchTree.insert(firstElement);
    binarySearchTree.insert(secondElement);
    binarySearchTree.insert(thirdElement);
    binarySearchTree.insert(fourthElement);
    const postOrderedTree: number[] = [];
    const pushNodeValue = (value: number) => postOrderedTree.push(value);
    binarySearchTree.postOrderTraverse(pushNodeValue);
    const referenceElements = [
      thirdElement,
      fourthElement,
      secondElement,
      firstElement
    ];

    expect(postOrderedTree).toEqual(referenceElements);
  });
});
