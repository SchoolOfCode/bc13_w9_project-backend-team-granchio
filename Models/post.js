import { query } from "../db/index.js";

export async function getAllPosts() {
    console.log('get all posts is rnning')
   const result = await query(
    'SELECT * FROM posts;')
    return result.rows
}



