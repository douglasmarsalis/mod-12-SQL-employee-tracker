// For connection to the database
const mysql = require('mysql2');

// This function came from npm site: 
// https://www.npmjs.com/package/mysql2 
// The password and User name will be hidden by .env inside .gitignore
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,  // Port 3306 is the default port for MySQL
    user: 'root', // MySQL user name
    password: '', // MySQL password
    databse: 'company_db'
});

// This function will throw error if not connected OR let user know he/she is 
// connected, then move onto the questions in startMenu 
connection.connect(err => {
    if (err) throw err;
    console.log('You are connected to the EMPLOYEE TRACKER database!');
    startMenu();
});

module.exports = db;