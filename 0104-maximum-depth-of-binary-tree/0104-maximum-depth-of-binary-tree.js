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
 * @return {number}
 */
var maxDepth = function(root) {
   if (root === null) {
        return 0
    }
    
    let answer = 0

    const goDown = (tree, height) => {
        if (tree === null) {
            return
        }

        if (tree.left === null && tree.right === null) {
            if (height > answer) {
                answer = height
            }
        }

        goDown(tree.left, height + 1)
        goDown(tree.right, height + 1)
    }
    
    
    goDown(root, 1)
    
    return answer
};