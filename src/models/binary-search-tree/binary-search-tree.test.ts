import BinarySearchTree from './binary-search-tree.class';

describe('BinarySearchTree', () => {
  const firstElement = 123;
  const secondElement = 456;
  const thirdElement = 87;
  const fourthElement = 231;
  const fifthElement = 571;
  const sixthElement = 686;
  const getOrderedTreeAndOrderedReference = (
    binarySearchTree: BinarySearchTree<number>,
    reference: number[]
  ) => {
    const orderedTree: number[] = [];
    const orderedReference: number[] = [...reference];
    const pushNodeValue = (value: number) => orderedTree.push(value);
    binarySearchTree.inOrderTraverse(pushNodeValue);
    orderedReference.sort(function (a, b) {
      return a - b;
    });

    return { orderedTree, orderedReference };
  };

  test('Should insert new element', () => {
    const binarySearchTree = new BinarySearchTree();
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
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(firstElement);
    binarySearchTree.insert(secondElement);
    binarySearchTree.insert(thirdElement);
    expect(binarySearchTree.search(firstElement)).toBeTruthy();
    expect(binarySearchTree.search(secondElement)).toBeTruthy();
    expect(binarySearchTree.search(thirdElement)).toBeTruthy();
    expect(binarySearchTree.search(fourthElement)).toBeFalsy();
  });

  test('Should in order traverse a callback function', () => {
    const binarySearchTree = new BinarySearchTree<number>();
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
    const binarySearchTree = new BinarySearchTree<number>();
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
    const binarySearchTree = new BinarySearchTree<number>();
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

  test('Should return the min value', () => {
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(firstElement);
    binarySearchTree.insert(secondElement);
    binarySearchTree.insert(thirdElement);
    binarySearchTree.insert(fourthElement);
    const referenceElements = [
      firstElement,
      secondElement,
      thirdElement,
      fourthElement
    ];

    expect(binarySearchTree.min()).toBe(Math.min(...referenceElements));
  });

  test('Should return the max value', () => {
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(firstElement);
    binarySearchTree.insert(secondElement);
    binarySearchTree.insert(thirdElement);
    binarySearchTree.insert(fourthElement);
    const referenceElements = [
      firstElement,
      secondElement,
      thirdElement,
      fourthElement
    ];

    expect(binarySearchTree.max()).toBe(Math.max(...referenceElements));
  });

  test('Should remove an element without children', () => {
    const binarySearchTree = new BinarySearchTree<number>();
    const elementsToAdd = [
      firstElement,
      secondElement,
      thirdElement,
      fourthElement,
      fifthElement
    ];
    elementsToAdd.forEach((element) => binarySearchTree.insert(element));

    const allReferenceElements = [...elementsToAdd];
    const { orderedTree, orderedReference } = getOrderedTreeAndOrderedReference(
      binarySearchTree,
      allReferenceElements
    );
    expect(orderedTree).toEqual(orderedReference);

    const elementToRemove = thirdElement;
    binarySearchTree.remove(elementToRemove);

    const allReferenceElementsWithElementRemoved = elementsToAdd.filter(
      (element) => element !== elementToRemove
    );
    const {
      orderedTree: orderedTreeAfterRemoval,
      orderedReference: orderedReferenceAfterRemoval
    } = getOrderedTreeAndOrderedReference(
      binarySearchTree,
      allReferenceElementsWithElementRemoved
    );

    expect(orderedTreeAfterRemoval).toEqual(orderedReferenceAfterRemoval);
  });

  test('Should remove an element without right children', () => {
    const binarySearchTree = new BinarySearchTree<number>();
    const elementsToAdd = [
      firstElement,
      secondElement,
      thirdElement,
      fourthElement,
      fifthElement,
      sixthElement
    ];
    elementsToAdd.forEach((element) => binarySearchTree.insert(element));

    const allReferenceElements = [...elementsToAdd];
    const { orderedTree, orderedReference } = getOrderedTreeAndOrderedReference(
      binarySearchTree,
      allReferenceElements
    );
    expect(orderedTree).toEqual(orderedReference);

    const elementToRemove = fifthElement;
    binarySearchTree.remove(elementToRemove);

    const allReferenceElementsWithElementRemoved = elementsToAdd.filter(
      (element) => element !== elementToRemove
    );
    const {
      orderedTree: orderedTreeAfterRemoval,
      orderedReference: orderedReferenceAfterRemoval
    } = getOrderedTreeAndOrderedReference(
      binarySearchTree,
      allReferenceElementsWithElementRemoved
    );

    expect(orderedTreeAfterRemoval).toEqual(orderedReferenceAfterRemoval);
  });

  test('Should remove an element with two childrens', () => {
    const binarySearchTree = new BinarySearchTree<number>();
    const elementsToAdd = [
      firstElement,
      secondElement,
      thirdElement,
      fifthElement
    ];
    elementsToAdd.forEach((element) => binarySearchTree.insert(element));

    const allReferenceElements = [...elementsToAdd];
    const { orderedTree, orderedReference } = getOrderedTreeAndOrderedReference(
      binarySearchTree,
      allReferenceElements
    );
    expect(orderedTree).toEqual(orderedReference);

    const elementToRemove = fourthElement;
    binarySearchTree.remove(elementToRemove);

    const allReferenceElementsWithElementRemoved = elementsToAdd.filter(
      (element) => element !== elementToRemove
    );
    const {
      orderedTree: orderedTreeAfterRemoval,
      orderedReference: orderedReferenceAfterRemoval
    } = getOrderedTreeAndOrderedReference(
      binarySearchTree,
      allReferenceElementsWithElementRemoved
    );

    expect(orderedTreeAfterRemoval).toEqual(orderedReferenceAfterRemoval);
  });
});
