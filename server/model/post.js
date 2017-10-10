const Sequilize = require('sequelize');

const sequilize = require('./index');

const Post = sequilize.define('post', {
    username: Sequilize.STRING,
    text: Sequilize.STRING
});

module.exports = Post;