const Movie = require('../models/Movie');

exports.getAll = () => Movie.find();

exports.create = (movieData) => Movie.create(movieData);

exports.getOne = (movieId) => Movie.findById(movieId).lean();

exports.search = async (title, genre, year) => {
    let filteredMovies = await Movie.find().lean();

    if (title) {
        filteredMovies = filteredMovies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
    }

    if (genre) {
        filteredMovies = filteredMovies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
    }

    if (year) {
        filteredMovies = filteredMovies.filter(movie => movie.year === year);
    }

    return filteredMovies;
}