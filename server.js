// Dependencies
const inquirer = require('inquirer');
const mysql = require('mysql2');
const connection = require('./db/connections');
 

// This function prompts for the first question with a choice menu
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
                viewDepartment(); // Variables have been created to use below for making additional questions
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
    connection.query('SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.department_name, roles.salary, employees.manager_id FROM ((departments JOIN roles ON departments.id = roles.department_id) JOIN employees ON roles.id = employees.role_id);',
        function (err, res) {
            if (err) throw err;
            console.table(res);
            startMenu();
        });
};

// Choose to add department
const addDepartment = () => {
    inquirer.prompt([
        {
            name: 'department_name',
            type: 'input',
            message: 'What is the name of the departrment?',
        },
    ])
        .then(answer => {
            connection.query(
                'INSERT INTO departments (department_name) VALUES (?)',
                [answer.department_name],
                function (err, res) {
                    if (err) throw err;
                    console.log('Department was successfully added!');
                    startMenu();
                }
            );
        });
};

// Choose to add role
const addRole = () => {
    inquirer.prompt([
        {
            name: 'title',
            type: 'input',
            message: 'What is the name of the role?',
        },
        {
            name: 'salary',
            type: 'input',
            message: 'What is the salary of the role?',
        },
        {
            name: 'departmentId',
            type: 'input',
            message: 'Which department (by ID) does the role belong to?',
        },
    ])
        .then(answer => {
            connection.query(
                'INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)',
                [answer.title, answer.salary, answer.department_id],
                function (err, res) {
                    if (err) throw err;
                    console.log('Role was successfully added!');
                    startMenu();
                }
            );
        });
};

// Choose to add employee
const addEmployee = () => {
    inquirer.prompt([
        {
            name: 'firstName',
            type: 'input',
            message: "What is the employee's first name?",
        },
        {
            name: 'lastName',
            type: 'input',
            message: "What is the employee's last name?",
        },
        {
            name: 'roleId',
            type: 'input',
            message: "What is the employee's role (by ID)?",
        },
        {
            name: 'managerId',
            type: 'input',
            message: "Who is the employee's manager (by ID)",
        },
    ])
        .then(answer => {
            connection.query(
                'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
                [answer.firstName, answer.lastName, answer.roleId, answer.managerId],
                function (err, res) {
                    if (err) throw err;
                    console.log('Employee was successfully added!');
                    startMenu();
                }
            );
        });
};

// Choose to update employee role
const updateEmployeeRole = () => {
    inquirer.prompt([
        {
            name: 'id',
            type: 'input',
            message: "Which employee's role (by ID) do you want to update?",
        },
        {
            name: 'roleId',
            type: 'input',
            message: "Which role (by ID) do you want to assign to the selected employee?",
        },
    ])
        .then(answer => {
            connection.query(
                'UPDATE employees SET role_id=? WHERE id=?',
                [answer.roleId, answer.id],
                function (err, res) {
                    if (err) throw err;
                    console.log('Employee was successfully updated!');
                    startMenu();
                }
            );
        });
};

startMenu();