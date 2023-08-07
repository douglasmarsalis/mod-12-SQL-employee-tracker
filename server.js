// Dependencies
const inquirer = require('inquirer');
const mysql = require('mysql2');
// Do I need additional function and requirements !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// This function came from npm site: https://www.npmjs.com/package/mysql2 
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306, // Port 3306 is the default port for mysql
    user: 'root',
    password: '', // Need to add password here !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    database: 'company_db', 
});

// This function will throw error if not connected OR let user know he/she is 
// connected, then move onto the questions in startMenu 
connection.connect(err => {
    if (err) throw err;
    console.log('You are connected to the EMPLOYEE TRACKER database!');
    startMenu();
});

// This function prompts for the first question
const startMenu = () => {
    inquirer.prompt({
        message: '',
        name: 'menu',
        type: 'list',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Exit',
        ],
    })
// The switch statement evaluates an expression, matching the expression's value 
// against a series of case clauses, and executes statements after the first case 
// clause with a matching value, until a break statement is encountered. The default 
// clause of a switch statement will be jumped to if no case matches the expression's value.    
    .then(response => {
        switch (response.menu) {
            case 'View all departments':
                viewDepartment();
                break;
            case 'View all roles':
                viewRoles();
                break;
            case 'View all employees':
                viewEmployees();
                break;
            case 'Add a department':
                addDepartment();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'Add an employee':
                addEmployee();
                break;
            case 'Update an employee role':
                updateEmployeeRole();
                break;
            case 'Exit':
                connection.end();
                break;
                default:
                    connection.end();                     
        }
    });
};

