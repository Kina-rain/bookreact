const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    description: {type: String, required: false},
    imageLink: {type: String, required: false},
    bookLink: {type: String, required: false}
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;