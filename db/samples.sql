SELECT 
employee.id,
department_name,
role_id,
title,
salary,
first_name,
last_name,
manager_id
FROM ((department
JOIN role ON department.id = role.department.id)
JOIN employee ON role.id = employee.role_id);