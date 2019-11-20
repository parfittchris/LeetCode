function favGenres(users, genres) {
    let names = Object.keys(users);
    let results = {};

    names.forEach((name) => {
        let counter = {};
        let favs = [];

        users[name].forEach((song) => {
            let genre = findGenre(song, genres);

            if (!counter[genre]) {
                counter[genre] = 1
            } else {
                counter[genre]++
            }
        });

        let tally = Object.values(counter);
        let max = Math.max(...tally)

        for (let j = 0; j < tally.length; j++) {
            if (tally[j] === max) favs.push(Object.keys(counter)[j]);
        }

        results[name] = favs;
    });

    return results;
}

function findGenre(song, list) {

    let genres = Object.values(list);

    for (let i = 0; i < genres.length; i++) {
        if (genres[i].includes(song)) {
            return Object.keys(list)[i]
        }
    }
}




let userMap = {
    "David": ["song1", "song2", "song3", "song4", "song8"],
    "Emma": ["song5", "song6", "song7"]
}
let genreMap = {
    "Rock": ["song1", "song3"],
    "Dubstep": ["song7"],
    "Techno": ["song2", "song4"],
    "Pop": ["song5", "song6"],
    "Jazz": ["song8", "song9"]
}

console.log(favGenres(userMap, genreMap));
// console.log(findGenre('song6', genreMap))