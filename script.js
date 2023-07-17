const numberOfFields = +prompt("How many movies have you watched?")

const personalMovieDatabase = {
    count: numberOfFields,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
