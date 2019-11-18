
function competition(numCompanies, topCompanies, allCompanies, numReviews, reviews) {
    let counter = {};
    let result = [];

    for (let i = 0; i < reviews.length; i++) {
        let split = reviews[i].split(' ');

        for (let j = 0; j < split.length; j++) {
            let word = split[j].toLowerCase();

            if (allCompanies.includes(word)) {
                if (!counter[word]) {
                    counter[word] = 1;
                } else {
                    counter[word]++
                }
            }
        }
    }

    var sortable = [];
    for (var company in counter) {
        sortable.push([company, counter[company]]);
    }

    sortable.sort(function (a, b) {
        return b[1] - a[1];
    });


    for (let i = 0; i < topCompanies; i++) {
        result.push(sortable[i][0])
    }

    return result;

}

let numCompetitors = 6
let topNCompetitors = 2
let competitors = ['newshop', 'shopnow', 'afshion', 'fashionbeats', 'mymarket', 'tcellular']
let numReviews = 6
let reviews = ["newshop is providing good services in the city, everyone should use newshop",
    "best services by newshop",
    "fashionbeats has great services in the city",
    "I am proud to have fashionbeats",
    "mymarket has awesome services",
    "Thanks Newshop for the quick delivery."]

console.log(competition(numCompetitors, topNCompetitors, competitors, numReviews, reviews));