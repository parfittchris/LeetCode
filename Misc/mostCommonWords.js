function commonWords(text, dictionary) {
    let counter = {};
    let maxCount = 0;
    let split = text.split(/[^\w']+/g);

    for (let i = 0; i < split.length - 1; i++) {
        let word = split[i];

        if (!dictionary.includes(word)) {
            if (!counter[word.toLowerCase()]) {
                counter[word.toLowerCase()] = 1;
            } else {
                counter[word.toLowerCase()]++
            }
        }
    }

    maxCount = Math.max(...Object.values(counter));
    return Object.keys(counter).filter(ele => { return counter[ele] === maxCount });
}


let literatureText = "Jack and Jill went to the market to buy bread and cheese.Cheese is Jack’s and Jill’s favorite food.";
let wordsToExclude = ['and', 'he', 'the', 'to', 'is', 'Jack', 'Jill'];
console.log(commonWords(literatureText, wordsToExclude));