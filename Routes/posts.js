import express, { Router } from "express";
import { createPost } from "../Models/post.js";
import getAllPosts from "../Models/post.js";
export const postsRouter = express.Router();

postsRouter.get("/", async function (req, res) {
  const allPosts = await getAllPosts();
  res.json({ success: true, payload: allPosts });
});

//get single post by ID, and all comments
// postsRouter.get("/:id", async function (req, res) {
//   const post = await getPost(req);
//   res.json({ success: true, payload: post });
// });

// //post a post.
postsRouter.post("/", async function (req, res) {
  console.log("dave");
  const data = req.body;
  const newPost = await createPost(data);
  res.json({ success: true, payload: newPost });
});

// //patch a post by ID.
// postsRouter.patch("/:id", async function (req, res) {
//   const data = req.body;
//   const updatedPost = await updatePost(data);
//   res.json({ success: true, payload: updatedPost });
// });

// //delete a post by ID.
// postsRouter.delete("/:id", async function (req, res) {
//   const deletedPost = await deletePost(req);
//   res.json({ success: true, payload: deletedPost });
// });

// //getposts by title search VERSION 2
// //
