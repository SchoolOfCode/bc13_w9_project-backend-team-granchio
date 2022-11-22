//const { Pool } = require("pg");
import Pool from 'pg'
const pool = new Pool({
  connectionString: process.env.POSTGRES_CONNECTION_URL,
});

// module.exports = {
//   query: function (text, params) {
//     return pool.query(text, params);
//   },
// };


  export const query= function (text, params) {
    return pool.query(text, params);
  }



