import express, { Router } from "express";

export const postsRouter = express.Router();

postsRouter.get("/", async function (req, res) {
  // const allPosts = await getAllPosts();
  res.json({ success: true, payload: "dave" });
});
