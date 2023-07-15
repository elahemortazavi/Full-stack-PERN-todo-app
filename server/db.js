// const Pool = require("pg").Pool;

// const pool = new Pool({
//   user: "postgres",
//   password: "zxcv",
//   host: "localhost",
//   port: 5432,
//   database: "perntodo",
// });

// module.exports = pool;


const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

module.exports = pool;

