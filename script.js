const numberOfFields = +prompt("How many movies have you watched?", "")

const personalMovieDatabase = {
    count: numberOfFields,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt("What is your last watched movie?", "");
const b = prompt("What your rate for this movie?", "");
const c = prompt("One more your last watched movie?", "");
const d = prompt("What your rate for this movie?", "");

personalMovieDatabase.movies[a] = b;
personalMovieDatabase.movies[c] = d;

console.log(personalMovieDatabase)
