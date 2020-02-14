// https://leetcode.com/problems/find-median-from-data-stream/

var MedianFinder = function () {
    this.array = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    let low = 0;
    let high = this.array.length - 1;

    while (low <= high) {
        let mid = Math.floor((high + low) / 2);

        if (this.array[mid] < num) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    this.array.splice(low, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    if (this.array.length % 2 === 0) {
        const mid = this.array.length / 2;
        return (this.array[mid] + this.array[mid - 1]) / 2;
    } else {
        const mid = Math.floor(this.array.length / 2);
        return this.array[mid];
    }
};


let test = MedianFinder();
// test.addNum(4);
// console.log(test.median)
console.log(test)