/**
 * one hundred and eigth: 108. 将有序数组转换为二叉搜索树
 * 解题思路：
 * 1. dfs
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 1. dfs
 * 详解：
 * 有序数组构建一颗平衡二叉搜索树，其实就是根据中序遍历构建树
 * 每层使用左右边界的中间节点作为根节点，然后构建左右子树
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (!nums.length) return null;

    function recur (l = 0, r = nums.length - 1) {
        // l == r，说明是单节点，左右子树都应该是null
        if (l > r) return null;
        // 长度计算：r - l + 1，索引位置包括l所以计算后的索引应该减1
        const mid = l + ((r - l) >> 1);
        const root = new TreeNode(nums[mid]);
        root.left = recur(l, mid - 1);
        root.right = recur(mid + 1, r);
        return root;
    }

    return recur();
};