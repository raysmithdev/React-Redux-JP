const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlogSchema = new Schema({
    title: String,
    content: String,
    createdAt: Date
});

module.exports = mongoose.model('Blog', BlogSchema)
