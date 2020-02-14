// class lruMap {
//     constructor(capacity) {
//         this.capacity = capacity;
//         this.cache = new Map();
//     }

//     insert(key, val) {
//         if (this.cache.has(key)) {
//             this.cache.delete(key);
//         }

//         this.cache.set(key, val);
//         if (this.cache.size > this.capacity) {
//             let oldKey = this.cache.keys().next().value;
//             this.cache.delete(oldKey);
//         }
//     }

//     get(key) {
//         let item = this.cache.has(key);
        
//         if (item) {
//             const value = this.cache.get(key);
//             this.insert(key, value);
//             return value;
//         } else {
//             return -1;
//         }
//     }
// }

class listNode {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DLL {
    constructor() {
        this.size = 0;
        this.head = new Node(null);
        this.tail = new Node(null);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    insert(node) {
        if (this.head.next === this.tail) {
            this.head.next = node;
            this.tail.prev = node;
            node.next = this.tail;
            node.prev = this.head;
        } else {
            let tempHead = this.head.next;
            this.head.next = node;
            node.next = tempHead;
            node.prev = this.head;
            tempHead.prev = node;
        }
        this.size++
    }

    deleteTail() {
        if (this.head.next === this.tail) return;

        let tempTail = this.tail.prev;
        let prevNode = tempTail.prev;
        prevNode.next = this.tail;
        this.tail.prev = prevNode;

        this.size--;

        return tempTail;
    }

    moveUp(node) {
        if (this.head.next === node) return;

        let nextNode = node.next;
        let prevNode = node.prev;
        nextNode.prev = prevNode;
        prevNode.next = nextNode;

        let tempHead = this.head.next;
        this.head.next = node;
        node.next = tempHead;
        node.prev = this.head;
        tempHead.prev = node;
    }
}


class LRU {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = {};
        this.list = new DLL();
    }

    insert(key, value) {
        if (this.map[key]) {
            const node = this.map[key];
            node.val = value;
            this.list.moveUp(node);
        } else {
            if (this.list.size === this.capacity) {
                let node = this.list.deleteTail();
                delete this.map[node.key];
            }

            let newNode = new listNode(key, value);
            this.list.insert(newNode);
            this.map[key] = value;
        }
    }

    search(key) {
        let node = this.map[key];

        if (node) {
            this.list.moveUp(node);
            return node;
        } else {
            return -1;
        }
    }
}



let test = new lruMap(3);

test.insert(1, 'cat');
test.insert(2, 'dog');
test.insert(3, 'pigeon');
test.insert(4, 'catdog');


console.log(test.get(3));
console.log(test.get(1));



