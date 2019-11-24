// https://leetcode.com/problems/implement-trie-prefix-tree/

// Implement a trie with insert, search, and startsWith methods.

class Trie {
    constructor() {
        this.root = {};
    }

    insert(word) {
        let node = this.root;

        for (let i = 0; i < word.length; i++) {
            let char = word[i];

            if (!node[char]) {
                node[char] = {};
                node = node[char];
            } else {
                node = node[char];
            }

        }
        node.isTerminal = true;
    }

    search(word, prefix) {
        let node = this.root;

        for (let i = 0; i < word.length; i++) {
            let char = word[i]

            if (node[char]) {
                node = node[char];
            } else {
                return false;
            }
        }

        if (prefix === true || node.isTerminal === true) {
            return true;
        } else {
            return false;
        }
    }

    isPrefix(prefix) {
        return this.search(prefix, true);
    }
}

let test = new Trie();
test.insert('catdog');
test.insert('pizzaparty');
test.insert('jazzhands');
test.insert('pixiesticks');

console.log(test.isPrefix('cot'));
