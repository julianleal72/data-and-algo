// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Example:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]


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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []
    let levels = [root]
    let result = []
    while(levels.length > 0){
        let temp = []
        let layerSize = levels.length
        for(i = 0; i < layerSize; i++){
            let add = levels.shift()
            temp.push(add.val)
            console.log(temp)
            if(add.left) levels.push(add.left)
            if(add.right) levels.push(add.right)
        }
        result.push(temp)
    }
    return result 
};