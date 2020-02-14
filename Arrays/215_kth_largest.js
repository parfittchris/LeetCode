
// Find the kth largest element in an unsorted array.Note 
// that it is the kth largest element in the sorted order, not the kth 
// distinct element.

var findKthLargest = function (nums, k) {
    nums = nums.sort((a,b) => b-a);

    return nums[k - 1]
};

var findKthLargestHeap = function (nums, k) {
    let heap = new maxHeap();

    nums.forEach(el => heap.insert(el));

    for (let i = 1; i < k; i++) {
        heap.deleteMax();
    }

    return heap.deleteMax()
};



class maxHeap {
    constructor() {
        this.heap = [null];
    }

    getParent(idx) {
        return Math.floor(idx / 2);
    }

    getLeftChild(idx) {
        return idx * 2;
    }

    getRightChild(idx) {
        return idx * 2 + 1;
    }

    insert(val) {
        this.heap.push(val);
        this.siftUp(this.heap.length - 1);
    }

    siftUp(idx) {
        if (idx === 1) return;
        const parent = this.getParent(idx);

        if (this.heap[parent] < this.heap[idx]) {
            [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
        }

        this.siftUp(parent);
    }

    deleteMax() {
        if (this.heap.length === 1) return null;
        if (this.heap.length === 2) return this.heap.pop();

        const max = this.heap[1];
        this.heap[1] = this.heap.pop();
        this.siftDown(1);
        return max;
    }

    siftDown(idx) {
        const lChild = this.getLeftChild(idx);
        const rChild = this.getRightChild(idx);

        let lVal = this.heap[lChild];
        let rVal = this.heap[rChild];
        let swapIdx;

        lVal = lVal === undefined ? -Infinity : lVal;
        rVal = rVal === undefined ? -Infinity : rVal;

        if (this.heap[idx] > lVal && this.heap[idx] > rVal) return;

        if (lVal > rVal) {
            swapIdx = lChild;
        } else {
            swapIdx = rChild;
        }

        [this.heap[swapIdx], this.heap[idx]] = [this.heap[idx], this.heap[swapIdx]];

        this.siftDown(swapIdx);
    }
}


const  input = [3, 2, 1, 5, 6, 4, 10, 48, 92, 81, 93, 932, 93, 92,02, -10] 
const k = 2
// const test = new Array(1000000).fill(12);


var start = new Date();
var startTime = start.getTime();

console.log(findKthLargestHeap(input, k))
// console.log(findKthLargest(test, k))


var end = new Date();
var endTime = end.getTime();
var timeTaken = end - start;
console.log('Execution time is : ' + timeTaken);


