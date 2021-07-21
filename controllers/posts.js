const express = require('express');
const router = express.Router();

const Post = require('../models/posts')

// posts index route
router.get('/', (req, res) => {
    const posts = Post.all
    res.json({posts})
})

// posts show route
router.get('/:id', (req, res) => {
    try {
        const post = Post.findById(parseInt(req.params.id))
        res.json(post)
    } catch (err) {
        res.status(400).send(`Cannot find post with id ${req.params.id}`)
    }
})

// Create posts route
router.post('/', (req, res) => {
    const newPost = Post.create(req.body.name, req.body.age)
    res.status(201).json(newPost)
})

// Posts update route
router.patch('/:id', (req, res) => {
    const postToUpdate = Post.findById(parseInt(req.params.id))
    const updatedPost = postToUpdate.update({ age: postToUpdate.age + 1})
    res.json({post: updatedPost})
})


module.exports = router;