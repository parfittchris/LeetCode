// https://leetcode.com/problems/last-stone-weight/
// We have a collection of rocks, each rock has a positive integer weight.

// Each turn, we choose the two heaviest rocks and smash them together.
// Suppose the stones have weights x and y with x <= y.The result of this smash is:

// If x == y, both stones are totally destroyed;
// If x != y, the stone of weight x is totally destroyed, and the stone of weight 
// y has new weight y - x.
// At the end, there is at most 1 stone left.Return the weight of this 
// stone(or 0 if there are no stones left.)


// Implemented using a max heap

var lastStoneWeight = function (stones) {
    let heap = new maxHeap();

    stones.forEach(stone => heap.insert(stone));
    while (heap.heap.length > 2) {
        let current1 = heap.deleteMax();
        let current2 = heap.deleteMax();
        let result = current1 - current2;

        heap.insert(result);
    }

   return heap.heap[1];
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
        const leftChild = this.getLeftChild(idx);
        const rightChild = this.getRightChild(idx);
        let lVal = this.heap[leftChild];
        let rVal = this.heap[rightChild];
        let swapIdx;

        lVal = lVal === undefined ? -Infinity : lVal;
        rVal = rVal === undefined ? -Infinity : rVal;

        if (this.heap[idx] > lVal && this.heap[idx] > rVal) return;

        if (lVal > rVal) {
            swapIdx = leftChild;
        } else {
            swapIdx = rightChild;
        }

        [this.heap[swapIdx], this.heap[idx]] = [this.heap[idx], this.heap[swapIdx]];
        this.siftDown(swapIdx);
    }
}



const input = [2, 7, 4, 1, 8, 1, 1]
console.log(lastStoneWeight(input))


