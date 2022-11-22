import query from "../db/index.js";

async function getAllPosts() {
  console.log("get all posts is running");
  const result = await query("SELECT * FROM posts;");
  return result.rows;
}

export async function createPost(post) {
  const { post_title, post_content, user_id } = post;
  console.log("got a single post");
  const result = await query(
    `INSERT INTO posts (post_title, post_content, user_id)
      VALUES ($1, $2, $3);`,
    [post_title, post_content, user_id]
  );
  return result.rows;
}

export default getAllPosts;
