function rollDice(dice) {
    let minCount = Infinity;

    for (let i = 1; i <= 6; i++) {
        let count = 0;

        for (let j = 0; j < dice.length; j++) {
            if (dice[j] === i) {
                continue;
            } else if (dice[j] + i === 7) {
                count += 2;
            } else {
                count += 1;
            }
        }

        minCount = Math.min(count, minCount);
    }

    return minCount;
}


let dice = [1, 2, 3];
let dice2 = [1, 1, 6];
let dice3 = [1, 6, 2, 3];

console.log(rollDice(dice3));