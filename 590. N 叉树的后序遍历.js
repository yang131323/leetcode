/**
 * five-hundred-and-ninety: N 叉树的后序遍历
 * 解题思路
 * 1. 暴力： 按照后序遍历
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root, result = []) {
    if (!root) return result;
    if (root.children) {
        for (let i = 0; i < root.children.length; i++) {
            postorder(root.children[i], result);
        }
    }
    result.push(root.val);
    return result;
};