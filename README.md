# mod-12-SQL-employee-tracker

## [![License: APACHE2.0](https://img.shields.io/badge/License:_MIT-orange)](https://opensource.org/license/mit/)

## Description
* For this project, I will build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL..
* I will make sure that my code follows industry standards and is sourced correctly.
* By building this application, it has helped me to learn information on MySQL and other info.

## User Story
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business.

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database

## Sources
* Dependency packages: https://www.npmjs.com 
* MySQL default port: https://kinsta.com/knowledgebase/mysql-port/
* Switch statement: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
* Department names - https://simplicable.com/en/company-departments
* Employee names - https://ethanwiner.com/funnames.html 
* RICE UNIVERSITY Boot Camp Activities for MySQL.
* Special thanks to my tutor Ben.

## Link to Deployed Site

There is no deployed site for this application.

## Link to Github Repository

https://github.com/douglasmarsalis/mod-12-SQL-employee-tracker 

## Demonstration Video

[employee_tracker.webm](https://github.com/douglasmarsalis/mod-12-SQL-employee-tracker/assets/112460009/cbb5aaf0-4893-4827-95b2-15754c564c3d)


## License
MIT License

Copyright (c) 2023 Douglas Eric Marsalis

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
