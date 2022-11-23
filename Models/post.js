import query from "../db/index.js";

//original MEGA-GET request
// async function getAllPosts() {
//   console.log("get all posts is running");
//   const result = await query(
//     "SELECT * FROM users LEFT JOIN posts ON users.user_id = posts.user_id LEFT JOIN comments ON posts.post_id = comments.post_id"
//   );
//   return result.rows;
// }

async function getAllPostsandComments() {
  let postsCommentsArray = [];
  const allPosts = await query("SELECT * FROM posts");
  const allComments = await query("SELECT * FROM comments");
  return allPosts.rows.map((post) => {
    return {
      ...post,
      comments: allComments.rows.filter((c) => c.post_id === post.post_id),
    }; //above map/filter shorter/tidier version of outcome, from a mentor to help
    //with frontend structure
  });

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
}

// Allposts.rows.map((post) => post.post_id ? allComments.rows.post_id : )

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

export default getAllPostsandComments;

//time to change userID from generated to UUID, so we can return posts easier for confirmation
//of posts

//Delete comment
//Delete post
//change getAllPosts to MEGA GET request
//Middleware to correctly form the data for the frontend for MEGA GET
//Patch comment, Patch post , Search by whateverr
