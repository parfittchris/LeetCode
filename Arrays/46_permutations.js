https://leetcode.com/problems/permutations/

// Given a collection of distinct integers, return all possible permutations.


var permute = function (nums) {
    let results = [];

    function getPermutations(currentArr, candidates) {
        if (candidates.length === 0) {
            results.push(currentArr.slice());
        } else {
            for (let i = 0; i < candidates.length; i++) {
                currentArr.push(candidates[i]);
                let nextCandidates = candidates.slice();
                nextCandidates.splice(i, 1);
                getPermutations(currentArr, nextCandidates);
                currentArr.pop();
            }
        }
    }

    getPermutations([], nums);
    return results;
};


const input = [1, 2, 3];
console.log(permute(input));