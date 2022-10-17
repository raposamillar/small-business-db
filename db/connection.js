const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    //brings in the password from .env where it can remain hidden
    password:process.env.PW,
    database:'small_business_db'
  });

  db.connect();

  module.exports = db;