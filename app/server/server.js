const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const emoji = require('node-emoji')
const mongoose = require('mongoose')
const prettyjson = require('prettyjson')
const Blog = require('./models/blogs')

mongoose.connect('mongodb://localhost:27017/blog-app')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 8080

app.get('/blogs', (req, res) => {
  Blog.find({}, (err, blogs) => {
    if(err) {
      res.send(err)
    }
    res.json(blogs)
  })
})

app.post('/create-blog', (req, res) => {
  let blog = new Blog()
  blog.title = req.body.title
  blog.content = req.body.content

  blog.save((err, blog) => {
      if (err) {
        res.send(err)
      }

      res.json(blog)
  })
})

app.listen(port);

console.log('The coffee is brewing ' + emoji.get('coffee'))
