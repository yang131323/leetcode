/**
 * seven: 剑指 Offer 07. 重建二叉树
 * 解题思路（看题解）：
 * 思路如下：
 * 先序遍历可以得到：根节点｜左子树｜右子树的结构
 * 中序遍历可以得到：左子树｜根节点｜右子树的结构
 * 因此根据先序遍历可以得到根节点、然后根据根节点可以在右子树中确定左子树和右子树长度
 * 因此在先序遍历中可以得到左右子树的长度，每次都可以确定根节点和左右两个节点，递归处理该过程最终就能够得到一颗完整的二叉树
 * **⚠️注意**：有个前提就是这颗二叉树没有重复的元素，有重复的元素会导致无法确定根节点
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let map = {};
    for (let i = 0; i < inorder.length; i++) {
        map[inorder[i]] = i;
    }
    return recur(0, 0, preorder.length - 1);

    function recur (root, left, right) {
        if (right < left) return null;
        const val = preorder[root];
        const tree = new TreeNode(val);
        const index = map[val]
        tree.left = recur(root + 1, left, index - 1);
        tree.right = recur(root + 1 + index - left, index + 1, right);
        return tree;
    }
};