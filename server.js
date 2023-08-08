// Dependencies
const inquirer = require('inquirer');
const mysql = require('mysql2');
const db = require('./db/connection');
// Do I need additional function and requirements !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// This function prompts for the first question
const startMenu = () => {
    inquirer.prompt({
        message: 'What would you like to do?',
        name: 'menu',
        type: 'list',
        choices: [
            'View all departments',
            'Add a department',
            'View all employees',
            'Add an employee',
            'Update an employee role',
            'View all roles',
            'Add a role',
            'Quit',
        ],
    })
// The switch statement evaluates an expression, matching the expression's value 
// against a series of case clauses, and executes statements after the first case 
// clause with a matching value, until a break statement is encountered. The default 
// clause of a switch statement will be jumped to if no case matches the expression's value.    
    .then(response => {
        switch (response.menu) {
            case 'View all departments':
                viewDepartment(); // Variable has been created to use below for making additional question
                break;            // Each case will make a variable for an additional question
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
            case 'Quit':
                connection.end();
                break;
                default:
                    connection.end();                     
        }
    });
};

// This function creates a table - choose to view all departments
const viewDepartment = () => {
    connection.query('Select * FROM departments', function (err, res) {
        if (err) throw err;
        console.table(res);
        startMenu();
    });
};

// This function creates a table - choose to view all roles
const viewRoles = () => {
    connection.query('Select * FROM roles', function (err, res) {
        if (err) throw err;
        console.table(res);
        startMenu();
    });
};

// This function creates a table - choose to view all employees
const viewEmployees = () => {
    connection.query('Select * FROM employees', function (err, res) {
        if (err) throw err;
        console.table(res);
        startMenu();
    });
};

