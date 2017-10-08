const Post = require('../model/post');

const jsonResponse = (res, status, response) => {
    res.status(status).json(response);
};

module.exports.getPosts = (req, res) => {
    Post.findAll().then(posts => jsonResponse(res, 200, { success: true, posts: posts }));
};

module.exports.addPost = (req, res) => {
    Post.create({
        username: req.body.username,
        text: req.body.text
    }).then(post => jsonResponse(res, 200, { success: true, post: post }));
};