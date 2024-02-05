# Binary Search Tree

A Binary Search Tree (BST) is a hierarchical abstract data structure that organizes its nodes in a specific way to facilitate efficient search and retrieval operations. It consists of nodes where each node has at most two children nodes, referred to as the left child and the right child. Every node, except the root, has a parent node, forming a tree-like structure.

Nodes in a BST can be categorized into two types: internal and external nodes. Internal nodes have at least one child, either on the left or right, while external nodes, also known as leaves, have no children.

Each node in a BST has ancestors and descendants. Ancestors include the parent, grandparent, and so on, tracing back to the root. Descendants encompass the children, grandchildren, and so forth, extending down from the node.

The height of a tree is a measure of its depth, indicating the length of the longest path from the root to a leaf. The levels of a tree are defined based on the distance from the root, with the root itself considered at level 0. In a Binary Tree, each node can have at most two children, leading to a balanced structure that facilitates efficient search and insertion operations.

Understanding the structure and relationships within a Binary Search Tree is crucial for leveraging its advantages in terms of efficient data retrieval and manipulation. As we delve deeper into the intricacies of BSTs, we'll explore their properties, operations, and common use cases.

The contract of a BST can be defined as follows:

```tsx
export interface BinarySearchTreeMethods<T> {
  insert(key: T): void;
  search(key: T): boolean;
  inOrderTraverse(callback: (value: T) => void): void;
  preOrderTraverse(callback: (value: T) => void): void;
  postOrderTraverse(callback: (value: T) => void): void;
  min(): T | undefined;
  max(): T | undefined;
  remove(key: T): void;
}
```

Where the Binary Node is:

```tsx
export class BinarySearchTreeNode<T> {
  key: T;
  left: BinarySearchTreeNode<T> | null;
  right: BinarySearchTreeNode<T> | null;

  constructor(
    key: T,
    prev?: BinarySearchTreeNode<T>,
    next?: BinarySearchTreeNode<T>
  ) {
    this.key = key;
    this.left = prev || null;
    this.right = next || null;
  }
}
```

## Methods

A brief description about each method.

### Insert

The insert method adds a new node and its associated element to the BST. Initially, it checks if the root node exists. If not, a new root node is created.

In the presence of a root node, the method recursively traverses the tree to identify the optimal location for inserting the new node. At each step, the method compares the key of the node to be inserted with the key of the current node being visited. If the key is less than the current node's key and a left child exists, the method moves to the next level. If the left child does not exist, a new node is created. Similarly, if the key is greater than the current node's key, the method repeats the process for the right child.

### Search

The search method attempts to locate a target element within the BST. Whether the element is found or not, the method returns a boolean value indicating the success of the search operation. The search process involves traversing the tree starting from the root and recursively moving left or right based on the comparison between the target element and the current node's element. If the target element is found, the method returns true; otherwise, it returns false upon reaching an external (leaf) node.

### In Order Traverse

The "In Order Traverse" method systematically visits nodes in ascending order, facilitating the inclusion of a callback function to perform specific operations on each node. The process begins by traversing to the left node first.

If a left node exists, the method recursively moves to the next level. Once there are no more left nodes, the callback function is executed. Following this, the method proceeds to the right node, and if a right node exists, it repeats the process. This sequence ensures that nodes are visited in a sorted order, making it useful for various applications such as sorting and printing elements in ascending order.

### Pre Order Traverse

The "Pre Order Traverse" method systematically visits nodes in a specific order, carrying a callback function as an argument for customized operations on each node. In the "Pre Order" approach, the callback function is executed before traversing to the left and right nodes. The sequence begins by running the callback on the current node, followed by a recursive traversal to the left node, and then to the right node. This method is often employed for tasks such as creating a copy of the tree or generating a prefix expression.

### Post Order Traverse

The "Post Order Traverse" method systematically visits nodes in a specific order, also incorporating a callback function for node-specific operations. In the "Post Order" approach, the callback function is executed after traversing both the left and right nodes. The sequence starts with a recursive traversal to the left node, followed by a traversal to the right node, and finally, the callback function is executed on the current node. This method is useful for tasks such as evaluating expressions represented by the tree or deleting nodes in a bottom-up manner.

### Min

To retrieve the minimum value, the method traverses the BST by continually moving to the left nodes until there are no more left nodes. The minimum value is then obtained from the leftmost external node.

### Max

For the maximum value, the method traverses the BST by continually moving to the right nodes until there are no more right nodes. The maximum value is then obtained from the rightmost external node.

### Remove

The remove of a node is the most complex operation in this DS.

#### Search for the Node to Remove

The first step is to locate the node containing the element to be removed. This involves recursively traversing the tree based on the key comparison until the target node is found.

#### Identify the Removal Case

Once the node is located, the removal process depends on the number of children the node has:

#### Case 1: Node with No Children (Leaf Node):

Simply remove the node from the tree.

#### Case 2: Node with One Child:

Replace the node with its only child.

#### Case 3: Node with Two Children:

Find either the maximum node in the left subtree (predecessor) or the minimum node in the right subtree (successor). Replace the node to be removed with the predecessor or successor, and then recursively remove the predecessor or successor.
