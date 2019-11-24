// https://leetcode.com/problems/replace-words/

// In English, we have a concept called root, which can be followed by some other words to form another longer word - let's call this word successor. For example, the root an, followed by other, which can form another word another.

// Now, given a dictionary consisting of many roots and a sentence.You need to replace all the successor in the sentence with the root forming it.If a successor has many roots can form it, replace it with the root with the shortest length.

// You need to output the sentence after the replacement.

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
            let char = word[i];

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

    shortestPrefix(prefix) {
        let pre = '';
        let node = this.root;

        for (let i = 0; i < prefix.length; i++) {
            let char = prefix[i];

            if (!node[char]) {
                return ''
            } else {
                pre += char;
                node = node[char];
                if (node.isTerminal === true) return pre;
            }
        }
    }
}

var replaceWords = function (dict, sentence) {
    let trie = new Trie();

    dict.forEach(entry => {
        trie.insert(entry);
    });

    let split = sentence.split(' ');

    return split.map(word => { return trie.shortestPrefix(word) || word }).join(' ');

};

let dict = ["cat", "bat", "rat"]
let sentence = "the cattle was rattled by the battery"
console.log(replaceWords(dict, sentence));


