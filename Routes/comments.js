import express from "express";
import createComment from "../Models/comments.js";

export const commentsRouter = express.Router();

// post a comment.
commentsRouter.post("/", async function (req, res) {
  const data = req.body;
  const newComment = await createComment(data);
  res.json({ success: true, payload: newComment });
});

// //patch a post by ID. This is here to be ready for stretch goal
// commentsRouter.patch("/:id", async function (req, res) {
//   const data = req.body;
//   const updatedComment = await updatedComment(data);
//   res.json({ success: true, payload: updatedComment });
// });

// //delete a comment by ID. This is here to be ready for stretch goal
// commentsRouter.delete("/:id", async function (req, res) {
//   const deletedComment = await deleteComment(req);
//   res.json({ success: true, payload: deletedComment });
// });
