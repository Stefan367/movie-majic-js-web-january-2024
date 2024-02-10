const Movie = require('../models/Movie');
const Cast = require('../models/Cast');

exports.getAll = () => Movie.find();

exports.create = (movieData) => Movie.create(movieData);

exports.edit = (movieId, movieData) => Movie.findByIdAndUpdate(movieId, movieData)

exports.getOne = (movieId) => Movie.findById(movieId).populate('casts');

exports.search = (title, genre, year) => {
    let query = {};

    if (title) {
        // query = query.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
        query.title = new RegExp(title, 'i');
    }

    if (genre) {
        // query = query.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
        query.genre = genre.toLowerCase();
    }

    if (year) {
        query.year = year;
    }

    return Movie.find(query);
}

exports.attach = async (movieId, castId) => {
    // const movie = await this.getOne(movieId);

    // movie.casts.push(castId);

    // return movie.save();

    return Movie.findByIdAndUpdate(movieId, {$push: { casts: castId }});
}

exports.delete = (movieId) => Movie.findByIdAndDelete(movieId);