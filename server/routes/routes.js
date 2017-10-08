const express = require('express');
const router = express.Router();

const apiCtrl = require('../controllers/api');

router.get('/posts', apiCtrl.getPosts);

router.post('/addPost', apiCtrl.addPost);

module.exports = router;