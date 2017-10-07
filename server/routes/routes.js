const express = require('express');
const router = express.Router();

const apiCtrl = require('../controllers/api');

router.get('/posts', apiCtrl.getPosts);

module.exports = router;