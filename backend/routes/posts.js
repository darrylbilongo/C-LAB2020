const express = require('express');
const router = express.Router();
//let Post = require('../models/post.model');
const posts = require("../controllers/post.controller.js");

/**
 * @swagger
 * /posts:
 *  post:
 *    tags:
 *       - posts
 *    name: User Post
 *    summary: Post for a user
 *    produces:
 *      - application/json
 *    consumes : 
 *      - application/json
 *    parameters:
 *      - name: body
 *        in: body
 *        schema:
 *          $ref: '#/definitions/post'
 *          type: object
 *          properties:
 *            title: 
 *              type: string
 *            description:
 *              type: string
 *            published:
 *              type: boolean
 *            required:
 *              - title
 *              - description
 *    responses:
 *     '200': 
 *         description: Post Create and published successfully
 * 
 */

router.post('/', posts.create );

router.get('/', posts.findAll);

// Delete a Tutorial with id
router.delete("/:id", posts.delete);

// Create a new Tutorial
router.delete("/", posts.deleteAll);

module.exports = router;
