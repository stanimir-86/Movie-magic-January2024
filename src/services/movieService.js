const Movie = require('../models/Models.js');

const movies = [];

exports.getAll = async () => {
    const movies = await Movie.find();
    return movies;
};

exports.search = (title, genre, year) => {
    let result = movies.slice();

    if (title) {
        result = result.filter(movie => movie.title.toLowerCase(title.toLoweCase()));
    }
    if (genre) {
        result = result.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
    }
    if (genre) {
        result = result.filter(movie => movie.year === year);
    }

    return result;
}

exports.getOne = (movieId) => {
    const movie = Movie.find(movie => movie._id == movieId);


    return movie;
}
exports.create = async (movieData) => {

    const result = await Movie.create(movieData)

    return result;


}

