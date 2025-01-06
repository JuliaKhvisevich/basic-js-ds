const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null; 
    this.right = null; 
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null; 
  }


  root() {
    return this.rootNode;
  }

  add(data) {
    if (!this.rootNode) {
      this.rootNode = new Node(data);
    } else {
      this._addNode(this.rootNode, data);
    }
  }

  _addNode(node, data) {
    if (data < node.data) {
      if (node.left) {
        this._addNode(node.left, data);
      } else {
        node.left = new Node(data);
      }
    } else if (data > node.data) {
      if (node.right) {
        this._addNode(node.right, data); 
      } else {
        node.right = new Node(data); 
      }
    }
  }

  has(data) {
    return this._search(this.rootNode, data);
  }

  _search(node, data) {
    if (!node) return false; 
    if (node.data === data) return true; 


    return data < node.data ? this._search(node.left, data) : this._search(node.right, data);
  }

  
  find(data) {
    return this._findNode(this.rootNode, data);
  }

  _findNode(node, data) {
    if (!node) return null; 
    if (node.data === data) return node; 

    return data < node.data ? this._findNode(node.left, data) : this._findNode(node.right, data);
  }

 
  remove(data) {
    this.rootNode = this._removeNode(this.rootNode, data);
  }

  _removeNode(node, data) {
    if (!node) return null;

    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    } else {
      
      if (!node.left && !node.right) return null;
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      
      let minRight = node.right;
      while (minRight.left) {
        minRight = minRight.left;
      }
      node.data = minRight.data; 
      node.right = this._removeNode(node.right, minRight.data);
      return node;
    }
  }

  
  min() {
    if (!this.rootNode) return null; 
    let node = this.rootNode;
    while (node.left) {
      node = node.left; 
    }
    return node.data;
  }

  
  max() {
    if (!this.rootNode) return null; 
    let node = this.rootNode;
    while (node.right) {
      node = node.right; 
    }
    return node.data;
  }
}


module.exports = {
  BinarySearchTree
};