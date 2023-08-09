// For connection to the database
const mysql = require('mysql2');
require('dotenv').config();

// This function came from npm site: 
// https://www.npmjs.com/package/mysql2 
// Also from RICE UNIV activity
// The password and User name will be hidden by .env inside .gitignore
const db = mysql.createConnection({
    host: '127.0.0.1',
   // port: 3306,  // Port 3306 is the default port for MySQL
    user: 'root', // MySQL user name
    password: process.env.SECRET_KEY, // MySQL password
    database: 'company_db'
});

// This function will throw error if not connected OR let user know he/she is 
// connected, then move onto the questions in startMenu 
db.connect(err => {
    if (err) throw err;
});

module.exports = db;