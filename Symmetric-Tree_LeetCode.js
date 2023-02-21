// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example:
// Input: root = [1,2,2,3,4,4,3]
// Output: true

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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root) return true
    return getEm(root.left,root.right)
};

function getEm(left, right){
    if(!left && !right) return true
    if(!left || !right) return false
    if(left.val != right.val) return false

    return getEm(left.left, right.right) && getEm(left.right, right.left)
}