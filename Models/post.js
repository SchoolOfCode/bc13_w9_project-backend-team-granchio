import query from "../db/index.js";

export async function getAllPosts() {
    console.log('get all posts is running')
   const result = await query(
    'SELECT * FROM posts;')
    return result.rows
}

export async function getPost(post) {
    const {post_title, post_content, user_id} = post
    console.log('got a single post')
   const result = await query(
    `INSERT INTO "actors" (post_title, post_content, user_id)
      VALUES ($1, $2, $3);`,
      [post_title, post_content, user_id]
      )
    return "Posted " + result.rows
}