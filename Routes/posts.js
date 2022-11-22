import express, { Router } from "express";
import { getAllPosts } from "../Models/post.js";
export const postsRouter = express.Router();

postsRouter.get("/", async function (req, res) {
  const allPosts = await getAllPosts();
  res.json({ success: true, payload: allPosts });
});

//get single post by ID, and all comments
postsRouter.get("/:id", async function (req, res) {
  const post = await getPost(req);
  res.json({ success: true, payload: post });
});

//post a post.
postsRouter.post("/", async function (req, res) {
  const data = req.body;
  const newPost = await createPost(data);
  res.json({ success: true, payload: newPost });
});

//post a comment.
postsRouter.post("/:id", async function (req, res) {
  const data = req.body;
  const newComment = await createComment(data);
  res.json({ success: true, payload: newComment });
});

//patch a post by ID.
postsRouter.patch("/:id", async function (req, res) {
  const data = req.body;
  const updatedPost = await updatePost(data);
  res.json({ success: true, payload: updatedPost });
});

//patch a comment by ID.
postsRouter.patch("/:id", async function (req, res) {
  const data = req.body;
  const updatedComment = await updateComment(data);
  res.json({ success: true, payload: updatedComment });
});

//delete a comment by ID.
postsRouter.delete("/:id", async function (req, res));
//delete a comment by ID.
//getposts by title search VERSION 2
//
