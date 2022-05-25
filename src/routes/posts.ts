import express from "express";
const router = express.Router();

import PostsService from '../service/posts/Posts';

router.post('/posts', async (req, res) => {
    const { title, description } = req.body;

    const servicePost = new PostsService();
    const result = await servicePost.createdPost(title, description);

    res.status(201).send(result);
})

router.get('/posts', async (req, res) => {
    const servicePost = new PostsService();
    const result = await servicePost.getAllPosts();

    res.status(200).send(result);
})

router.get('/posts/:id', async (req,res) => {
    const { id } = req.params;

    const servicePost = new PostsService();
    const result = await servicePost.getOnePost(id);

    res.status(200).send(result);
})

router.post('/posts/like/:id', async (req,res) => {
    const { id } = req.params;

    const servicePost = new PostsService();
    const result = await servicePost.likePost(id);

    res.status(200).send(result);
})

export default router