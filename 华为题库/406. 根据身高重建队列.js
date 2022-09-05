/**
 * four hundred and six: 406. 根据身高重建队列
 * 解题思路：
 * 1. 根据身高进行降序排序
 */

/**
 * 1. 根据身高进行降序排序
 * 详情：
 * 根据身高倒序进行排序，就能确定每个元素之前大于等于它的个数，如果第二个数大于个数插到最后就行，如果小于则插到第二个参数的位置
 * 这样会有个问题，就是存在相同元素时位置可能会乱，如[[6, 0], [5, 1], [5, 0]]，因此对于第一个元素相等的元素按照第二个元素递增排序
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    const queue = [];
    people.sort((a, b) => {
        return a[0] == b[0] ? a[1] - b[1] : b[0] - a[0];
    });
    for (const p of people) {
        if (p[1] > queue.length) {
            queue.push(p);
        } else {
            queue.splice(p[1], 0, p);
        }
    }
    return queue;
};