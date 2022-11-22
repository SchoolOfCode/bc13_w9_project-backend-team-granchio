import express from "express";

export const commentsRouter = express.Router();

//post a comment.
postsRouter.post("/:id", async function (req, res) {
  const data = req.body;
  const newComment = await createComment(data);
  res.json({ success: true, payload: newComment });
});

//patch a post by ID.
postsRouter.patch("/:id", async function (req, res) {
  const data = req.body;
  const updatedComment = await updatedComment(data);
  res.json({ success: true, payload: updatedComment });
});

//delete a comment by ID.
postsRouter.delete("/:id", async function (req, res) {
  const deletedComment = await deleteComment(req);
  res.json({ success: true, payload: deletedComment });
});
