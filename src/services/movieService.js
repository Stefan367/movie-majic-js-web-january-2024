const Movie = require('../models/Movie');
const Cast = require('../models/Cast');

exports.getAll = () => Movie.find();

exports.create = (movieData) => Movie.create(movieData);

exports.getOne = (movieId) => Movie.findById(movieId).populate('casts');

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

exports.attach = async (movieId, castId) => {
    // const movie = await this.getOne(movieId);

    // movie.casts.push(castId);

    // return movie.save();

    return Movie.findByIdAndUpdate(movieId, {$push: { casts: castId }});
}