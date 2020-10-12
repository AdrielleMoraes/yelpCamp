require("dotenv").config();
const {Pool} = require('pg');

const pool = new Pool({
   host: process.env.PGHOST,
   user: process.env.PGUSER,
   database: process.env.PGNAME,
   password: process.env.PGPASSWORD,
   port: 5432,
});

module.exports={
   query:(text, params) => pool.query(text, params),
}