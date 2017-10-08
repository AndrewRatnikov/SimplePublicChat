const Sequilize = require('sequelize');

const sequilize = require('./index');

const Post = sequilize.define('post', {
    username: Sequilize.STRING,
    text: Sequilize.STRING
});

Post.sync({ force: true }).then(() => {
    return Post.create({
        username: 'Andrew',
        text: 'My first post'
    });
});

module.exports = Post;