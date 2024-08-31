/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    function sumNodeValue(val){
      if(!node) return 0;
      let sum = node.val
      for (let child of node.children){
        sum += sumNodeValue(child)
      }
      return sum
    }
    return sumNodeValue(this.root)
  } 

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!node) return 0
    let count = node.val % 2 === 0 ? 1: 0; 
    function countEvenNode(val){
      for (let child of node.children){
        count += countEvenNode(child)
      }
      return count 
    }
    return countEvenNode(this.root)
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if(!node) return 0
    let count = node.val > lowerBound ? 1:0 
    function countNumGreater(val){
      for (let child of children){
        count +=  countNumGreater(child, lowerBound)
      }
      return count
    }
    return countNumGreater(this.root, lowerBound)
  }
}

module.exports = { Tree, TreeNode };
