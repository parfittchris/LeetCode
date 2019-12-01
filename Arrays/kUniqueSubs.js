
// Given a string s and an int k, return all unique substrings of s of size k with k distinct characters.

function uniqueKSubs(string, k) {
    let idx = 0;
    let allSubs = {};

    while (idx + k <= string.length) {
        let sub = "";
        let j = 0;
        while (j < k) {
            sub += (string[idx + j]);
            j++;
        }

        if (!allSubs[sub]) {
            let counter = {};

            for (let char = 0; char < sub.length; char++) {
                if (counter[sub[char]]) {
                    counter[sub[char]]++
                } else {
                    counter[sub[char]] = 1;
                }
            }
            if (Math.max(...Object.values(counter)) <= 1) {
                allSubs[sub] = true;
            }
        }

        idx++;
    }

    return Object.keys(allSubs);
}

// let s = "abcabc";
// let k = 3;
// Output: ["abc", "bca", "cab"]

// let s = "abacab"
// let k = 3
// Output: ["bac", "cab"]

// let s = "awaglknagawunagwkwagl"
// let k = 4
// Output: ["wagl", "aglk", "glkn", "lkna", "knag", "gawu", "awun", "wuna", "unag", "nagw", "agwk", "kwag"]

console.log(uniqueKSubs(s, k));