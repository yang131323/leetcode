/**
 * thift three: 剑指 Offer 33. 二叉搜索树的后序遍历序列
 * 解题思路：
 * 1. 根据后序遍历逆向判断树是否符合二叉搜索树的定义
 */

/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder, l = 0, r = postorder.length - 1) {
    if (l >= r) return true;
    let root;
    for (let i = l; i < r; i++) {
        if (!root && postorder[i] < postorder[r]) continue;
        if (!root) root = i;
        if (postorder[i] < postorder[r]) return false;
    }
    /* 只有左子树或者只有右子树 */
    if (root == null || root == l) return verifyPostorder(postorder, l, r - 1);
    return verifyPostorder(postorder, l, root - 1) && verifyPostorder(postorder, root, r - 1);
};