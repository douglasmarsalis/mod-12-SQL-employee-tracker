SELECT 
employees.id,
department_name,
role_id,
title,
salary,
first_name,
last_name,
manager_id
FROM ((departments
JOIN roles ON departments.id = roles.departments.id)
JOIN employees ON roles.id = employees.roles_id);
