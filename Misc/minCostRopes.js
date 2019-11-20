class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    print() {
        console.log(this.queue);
    }

    enqueue(element) {
        if (this.queue.length === 0) {
            this.queue.push(element);
        } else {
            let added = false;
            for (let i = 0; i < this.queue.length; i++) {
                if (element[1] < this.queue[i][1]) {
                    this.queue.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.queue.push(element);
            }
        }
    }

    dequeue() {
        let ele = this.queue.shift();
        return ele
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    size() {
        return this.queue.length;
    }

    front() {
        if (this.isEmpty() === false) {
            return this.queue[0]
        } else {
            return 'Queue is empty'
        }
    }
}

function minCostRopes(ropes) {
    let sorted = ropes.sort((a, b) => a - b);
    let queue = new PriorityQueue();
    let result = 0;
    for (let i = 0; i < sorted.length; i++) {
        queue.enqueue([sorted[i], sorted[i]])
    }

    while (queue.queue.length > 1) {
        let first = queue.dequeue()
        let second = queue.dequeue();
        let temp = first[0] + second[0];
        result += temp
        queue.enqueue([temp, temp]);
    }
    return result
}

let ropes1 = [8, 4, 6, 12]
//58

let ropes2 = [20, 4, 8, 2]
//54

let ropes3 = [1, 2, 5, 10, 35, 89];
//224

let ropes4 = [2, 2, 3, 3];
//20

console.log(minCostRopes(ropes4));