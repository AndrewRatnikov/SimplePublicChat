const Post = require('../model/post');

const jsonResponse = (res, status, response) => {
    res.status(status).json(response);
};

module.exports.getPosts = (req, res) => {
    Post.findAll().then(posts => jsonResponse(res, 200, { success: true, posts: posts }));
};

module.exports.addPost = (req, res) => {
    const username = req.body.username;
    const text = req.body.text;
    const re = /^[a-zA-Z0-9]+$/g;
    const errors = [];

    if ( !username ) errors.push('Username field is required');
    if ( !text ) errors.push('Text field is required');
    if ( text && text.length > 200 ) errors.push('Text must be less than 200 symbols');
    if ( !re.test(username) ) errors.push('Username must contain only letters and numbers');
    if ( errors.length ) return jsonResponse(res, 405, { error: errors });

    Post.sync()
        .then(() => {
            return Post.create({
                username: req.body.username,
                text: req.body.text
            })
        })
        .then(post => jsonResponse(res, 201, { success: true, post: post }));
};