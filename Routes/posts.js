import express, { Router } from "express";
import { createPost } from "../Models/post.js";
import { getAllPostsandComments } from "../Models/post.js";
export const postsRouter = express.Router();

postsRouter.get("/", async function (req, res) {
  const PostsCommentsArray = await getAllPostsandComments();
  res.json({ success: true, payload: PostsCommentsArray });
});

// //post a post.
postsRouter.post("/", async function (req, res) {
  console.log(req.body);
  const data = req.body;
  const newPost = await createPost(data);
  res.json({ success: true, payload: newPost });
});

// //patch a post by ID. This is here to be ready for stretch goal
// postsRouter.patch("/:id", async function (req, res) {
//   const data = req.body;
//   const updatedPost = await updatePost(data);
//   res.json({ success: true, payload: updatedPost });
// });

// //delete a post by ID. This is here to be ready for stretch goal
// postsRouter.delete("/:id", async function (req, res) {
//   const deletedPost = await deletePost(req);
//   res.json({ success: true, payload: deletedPost });
// });
