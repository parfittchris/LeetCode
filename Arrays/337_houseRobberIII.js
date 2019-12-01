// // https://leetcode.com/problems/house-robber-iii/
// The thief has found himself a new place for his thievery again.There is only 
// one entrance to this area, called the "root." Besides the root, each house has 
// one and only one parent house.After a tour, the smart thief realized that 
// "all houses in this place forms a binary tree".It will automatically contact 
// the police if two directly - linked houses were broken into on the same night.

// Determine the maximum amount of money the thief can rob tonight without
//  alerting the police.



var rob = function (root) {
    function robHouses(node) {
        if (node === null) return [0, 0];
        //lr: left rob, ln: left no-rob,

        let [lr, ln] = robHouses(node.left);
        let [rr, rn] = robHouses(node.right);

        //Max of each node is either node value + not robbing next nodes or the maximum of all possible other rob/no rob combos
        return (node.val + ln + rn, Math.max(lr + rr, ln + rn, lr + rn, ln + rr));
    }

    return Math.max(...robHouses(root));
};

