import query from "../db/index.js";

async function getAllPosts() {
  console.log("get all posts is running");
  const result = await query("SELECT * FROM users LEFT JOIN posts ON users.user_id = posts.user_id LEFT JOIN comments ON posts.post_id = comments.post_id");
  return result.rows;
}

export async function createPost(post) {
  console.log(post);
  const { post_title, post_content, user_id } = post;
  const result = await query(
    `INSERT INTO "posts" (post_title, post_content, user_id)
      VALUES ($1, $2, $3);`,
    [post_title, post_content, user_id]
  );
  return `your post titled ${post_title} is now in the database but ${result.rows} doesn't work until we can hand in a UUID ID`;
}

export default getAllPosts;

//time to change userID from generated to UUID, so we can return posts easier for confirmation
//of posts

//Delete comment
//Delete post 
//change getAllPosts to MEGA GET request
//Middleware to correctly form the data for the frontend for MEGA GET
//Patch comment, Patch post , Search by whatever
