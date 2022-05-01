import express from "express";
const router = express.Router();

import PostsService from '../service/posts/Posts';

router.post('/posts', async (req, res) => {
    const { title, description } = req.body;

    const servicePost = new PostsService();
    const result = await servicePost.createdPost(title, description);

    res.status(201).send(result);
})

export default router