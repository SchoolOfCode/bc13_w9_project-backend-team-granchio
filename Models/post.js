import query from "../db/index.js";
import getDuckName from "./middleware.js";
import backupPostsWithComments from "../db/dbBackup.js";

export async function getAllPostsandComments() {
  try {
    const allPosts = await query("SELECT * FROM posts");
    const allComments = await query("SELECT * FROM comments");
    return allPosts.rows.map((post) => {
      return {
        ...post,
        comments: allComments.rows.filter((c) => c.post_id === post.post_id),
      }; //above map/filter shorter/tidier version of outcome, from a mentor to help
      //with frontend structure CONVERT TO JSDOC comment
    });
  } catch (err) {
    console.log(err);
    return backupPostsWithComments;
  }
}

export async function createPost(post) {
  const { post_title, post_content } = post;
  const duck_name = getDuckName();
  const result = await query(
    `INSERT INTO "posts" (post_title, post_content, duck_name)
      VALUES ($1, $2, $3) RETURNING *;`,
    [post_title, post_content, duck_name]
  );
  return result.rows;
}
