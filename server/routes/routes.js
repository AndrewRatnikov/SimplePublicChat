const express = require('express');
const router = express.Router();

const apiCtrl = require('../controllers/api');

/**
 * @swagger
 * definition:
 *  Post:
 *      required:
 *          - username
 *          - text
 *      properties:
 *          username:
 *              type: string
 *              format: '^[a-zA-Z0-9]$'
 *          text:
 *              type: string
 *              maxLength: 200
 */

/**
 * @swagger
 * /posts:
 *  get:
 *      tags:
 *          - Posts
 *      description: Returns all posts
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: An array of posts
 *              schema:
 *                  $ref: '#/definitions/Post'
 */
router.get('/posts', apiCtrl.getPosts);

/**
 * @swagger
 * /addPost:
 *  post:
 *      tags:
 *          - Posts
 *      description: Creates a new post
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: post
 *            description: Post Object
 *            in: body
 *            required: true
 *            schema:
 *              $ref: '#/definitions/Post'
 *      responses:
 *          201:
 *             description: Successfully created
 *          405:
 *              description: Validation exception
 */
router.post('/addPost', apiCtrl.addPost);

module.exports = router;