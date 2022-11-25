import query from "../db/index.js";
import getDuckName from "./middleware.js";
import backupPostsWithComments from "../db/dbBackup.js";

//original MEGA-GET request
// async function getAllPosts() {
//   console.log("get all posts is running");
//   const result = await query(
//     "SELECT * FROM users LEFT JOIN posts ON users.user_id = posts.user_id LEFT JOIN comments ON posts.post_id = comments.post_id"
//   );
//   return result.rows;
// }
async function getAllPostsandComments() {
  try {
    const allPosts = await query("SELECT * FROM posts");
    const allComments = await query("SELECT * FROM comments");
    return allPosts.rows.map((post) => {
      return {
        ...post,
        comments: allComments.rows.filter((c) => c.post_id === post.post_id),
      }; //above map/filter shorter/tidier version of outcome, from a mentor to help
      //with frontend structure
    });
  } catch (err) {
    console.log(err);
    return backupPostsWithComments;
  }
}
// for (let post of allPosts.rows) {
//   let newObj = { ...post, comments: [] };
//   for (let comment of allComments.rows) {
//     if (comment.post_id === post.post_id) {
//       newArr.push({ commentkey: comment });
//     }
//   }
//   postsCommentsArray.push(newArr);
// }
// return postsCommentsArray;
// }

// Allposts.rows.map((post) => post.post_id ? allComments.rows.post_id : )

export async function createPost(post) {
  console.log(post);
  const { post_title, post_content } = post;
  let duck_name = getDuckName();
  console.log(duck_name);
  const result = await query(
    `INSERT INTO "posts" (post_title, post_content, duck_name)
      VALUES ($1, $2, $3) RETURNING *;`,
    [post_title, post_content, duck_name]
  );
  return result.rows;
}

export default getAllPostsandComments;

//time to change userID from generated to UUID, so we can return posts easier for confirmation
//of posts

//Delete comment
//Delete post
//change getAllPosts to MEGA GET request
//Middleware to correctly form the data for the frontend for MEGA GET
//Patch comment, Patch post , Search by whateverr
