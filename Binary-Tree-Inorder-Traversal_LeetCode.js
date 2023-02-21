// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Example:
// Input: root = [1,null,2,3]
// Output: [1,3,2]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let tree = []
    help(root, tree)
    return tree
};

function help(root, tree){
    if(root){
        help(root.left, tree)
        tree.push(root.val)
        help(root.right, tree)
    }
}